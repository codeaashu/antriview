"use client"
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { vapi } from '@/lib/vapi.sdk';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface AgentProps {
    userName: string;
    userId: string;
    type: 'generate' | 'interview';
    interviewId: string;
    questions?: string[];
}

interface Message {
    type: string;
    transcriptType?: string;
    role: 'user' | 'assistant' | 'system';
    transcript: string;
}

const Agent = ({ userName, userId, type, interviewId, questions }: AgentProps) => {
    const router = useRouter();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [message, setMessage] = useState<SavedMessage[]>([]);

    const handleGenerateFeedback = async () => {
        console.log('Generating feedback here...');
        const { success, id } = {
            success: true,
            id: 'feedback-id'
        };
        if (success && id) {
            router.push(`/interview/${interviewId}/feedback`);
        } else {
            console.log('Failed to generate feedback');
            router.push('/');
        }
    };

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
        
        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage: SavedMessage = {
                    role: message.role,
                    content: message.transcript
                };
                setMessage((prev) => [...prev, newMessage]);
            }
        };

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onCallError = (error: Error) => {
            console.error('Call error:', error);
        };

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);
        vapi.on('error', onCallError);

        // Cleanup function
        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
            vapi.off('error', onCallError);
        };
    }, []);

    useEffect(() => {
        if (callStatus === CallStatus.FINISHED) {
            if (type === 'generate') {
                router.push('/');
            } else {
                handleGenerateFeedback();
            }
        }
    }, [message, callStatus, type, userId, router, interviewId]);

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING);

        try {
            if (type === "generate") {
                await vapi.start(
                    undefined,
                    undefined,
                    undefined,
                    process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!,
                    {
                        variableValues: {
                            username: userName,
                            userid: userId,
                        },
                    }
                );
            } else {
                let formattedQuestions = "";
                if (questions) {
                    formattedQuestions = questions
                        .map((question) => `- ${question}`)
                        .join("\n");
                }

                await vapi.start(interviewId, {
                    variableValues: {
                        questions: formattedQuestions,
                    },
                });
            }
        } catch (error) {
            console.error('Failed to start call:', error);
            setCallStatus(CallStatus.INACTIVE);
        }
    };

    const handleDisconnect = async () => {
        try {
            await vapi.stop();
            setCallStatus(CallStatus.FINISHED);
        } catch (error) {
            console.error('Failed to stop call:', error);
        }
    };

    const latestMessage = message[message.length - 1]?.content;
    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

    return (
        <>
            <div className='call-view'>
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <Image src="/ai-avatar.png" className='object-cover' alt="Avatar" width={65} height={54} />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className='card-border'>
                    <div className='card-content'>
                        <Image src="/user-avatar.png" className='rounded-full object-cover size-[120px]' alt="Avatar" width={540} height={540} />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            
            {message.length > 0 && (
                <div className="transcript-border">
                    <div className='transcript'>
                        <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {latestMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className='w-full flex justify-center'>
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className='relative btn-call' onClick={handleCall}>
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus === 'CONNECTING' && 'hidden')} />
                        <span>{isCallInactiveOrFinished ? 'Call' : 'Connecting...'}</span>
                    </button>
                ) : (
                    <button className='btn-disconnect' onClick={handleDisconnect}>Disconnect</button>
                )}
            </div>
        </>
    );
};

export default Agent;