import React from 'react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getRandomInterviewCover } from '@/lib/utils';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import Agent from '@/components/Agent';
import { getInterviewById } from "@/lib/actions/general.action";
import { getCurrentUser } from '@/lib/actions/auth.action';
import { RouteParams } from '@/types/index';

const Page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();
    
    if (!user) redirect('/sign-in');
    
    const interview = await getInterviewById(id);
    if (!interview) redirect('/');

    return (
        <>
            <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-row gap-4 items-center max-sm:flex-col">
                    <div className="flex flex-row gap-4 items-center">
                        <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40} className="rounded-full object-cover size-[40px]" />
                        <h3 className="capitalize">{interview.role} Interview</h3>
                    </div>
                    <DisplayTechIcons techStack={interview.techstack} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={user.profilePicture || `/user-avatar.jpg`} 
                            alt="user-avatar" 
                            width={32} 
                            height={32} 
                            className="rounded-full object-cover size-[32px]" 
                        />
                        <span className="text-sm font-medium">{user.name}</span>
                    </div>
                    <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
                </div>
            </div>

            <Agent 
                userName={user.name} 
                userId={user.id} 
                userProfilePicture={user.profilePicture}
                userInitials={user.profileInitials}
                interviewId={id} 
                type="interview" 
                questions={interview.questions} 
            />
        </>
    )
}

export default Page