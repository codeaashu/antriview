'use server';

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";
import { generateDefaultProfilePicture, getUserInitials } from "@/lib/utils";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try{
        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please sign in.',
            }
        }

        // Generate default profile picture and initials
        const profilePicture = generateDefaultProfilePicture(name);
        const profileInitials = getUserInitials(name);

        await db.collection('users').doc(uid).set({
            name,
            email,
            profilePicture,
            profileInitials,
            createdAt: new Date().toISOString(),
        })

        return {
            success: true,
            message: 'Account created successfully. Please sign in.',
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }  catch (error: any) {
        console.error("Error creating a user",  error);

        if(error?.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'This email is already in use.',
            }
        }

        return {
            success: false,
            message: 'Failed to create an account. Please try again.',
        }
    }
}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);

        if(!userRecord) {
            return {
                success: false,
                message: 'User does not exist. Create an account.',
            }
        }

        await setSessionCookie(idToken);

    } catch (e) {
        console.log(e);

        return {
            success: false,
            message: 'Failed to log into an account.'
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cokkieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, { 
        expiresIn: ONE_WEEK * 1000, })

    cokkieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    })
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();
        
        if (!userRecord.exists) return null;

        const userData = userRecord.data();
        
        return {
            name: userData?.name || '',
            email: userData?.email || '',
            id: userRecord.id,
            profilePicture: userData?.profilePicture || generateDefaultProfilePicture(userData?.name || ''),
            profileInitials: userData?.profileInitials || getUserInitials(userData?.name || ''),
        } as User;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();

    return !!user;
}

