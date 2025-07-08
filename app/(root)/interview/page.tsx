import React from 'react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'

const Page = async () => {
    const user = await getCurrentUser();
    
    if (!user) redirect('/sign-in');

    // @ts-expect-error - TypeScript issue with user properties
    const userName = user.name || 'User';
    // @ts-expect-error - TypeScript issue with user properties  
    const userId = user.id || '';

    return (
        <>
            <div className="flex flex-row gap-4 justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Interview Generation</h3>
                <div className="flex items-center gap-2">
                    <Image 
                        src={user.profilePicture || `/user-avatar.jpg`} 
                        alt="user-avatar" 
                        width={32} 
                        height={32} 
                        className="rounded-full object-cover size-[32px]" 
                    />
                    <span className="text-sm font-medium">{userName}</span>
                </div>
            </div>

            <Agent 
                userName={userName} 
                userId={userId} 
                userProfilePicture={user.profilePicture}
                userInitials={user.profileInitials}
                type="generate" 
            />
        </>
    )
}
export default Page