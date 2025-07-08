'use server'; 

import { db } from "@/firebase/admin";
import { generateObject } from "ai";
import { google } from '@ai-sdk/google';
import { feedbackSchema } from '@/constants';

export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
    const interviews = await db.collection('interviews')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get();

        return interviews.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    const { userId, limit = 20 } = params;

    const interviews = await db.collection('interviews')
        .orderBy('createdAt', 'desc')
        .where('finalized', '==', true)
        .where('userId', '!=', userId)
        .limit(limit)
        .get();

        return interviews.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as Interview[];
}

export async function getInterviewById(interviewId: string): Promise<Interview | null> {
    try {
        const doc = await db.collection('interviews').doc(interviewId).get();
        
        if (!doc.exists) {
            return null;
        }
        
        return {
            id: doc.id,
            ...doc.data()
        } as Interview;
    } catch (error) {
        console.error('Error fetching interview:', error);
        return null;
    }
}

export async function createFeedback(params: CreateFeedbackParams) {
    const { interviewId, userId, transcript } = params;

    try {
        const formattedTranscript = transcript.map((sentence: { role: string; content: string; }) => (`-${sentence.role}: ${sentence.content}\n`)).join('');

        const { object: { totalScore, categoryScores, strengths, areasForImprovement, finalAssessment } } = await generateObject({
            model: google('gemini-2.0-flash-001', {
                structuredOutputs: false,
            }),
            schema: feedbackSchema,
      prompt: `You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
    });

    const feedback = await db.collection('feedback').add({
      interviewId,
      userId,
      totalScore,
      categoryScores,
      strengths,
      areasForImprovement,
      finalAssessment,
      createdAt: new Date().toISOString(),
    });

    return {
        success: true,
        feedbackId: feedback.id
    }


    } catch (error) {
        console.error('Error saving feedback:', error)

        return { success: false }
    }
}

export async function getFeedbackByInterviewId(params: GetFeedbackByInterviewIdParams): Promise<Feedback | null> {
    const { interviewId, userId } = params;

    const feedback = await db.collection('feedback')
        .where('interviewId', '==', interviewId)
        .where('userId', '==', userId)
        .limit(1)
        .get();

        if(feedback.empty) return null;

        const feedbackDoc = feedback.docs[0];
        return {
            id: feedbackDoc.id,
            ...feedbackDoc.data()
        } as Feedback;
}

export async function getFeedbackByInterviewIdPublic(interviewId: string): Promise<Feedback | null> {
    // This allows anyone to see feedback for any interview
    const feedback = await db.collection('feedback')
        .where('interviewId', '==', interviewId)
        .limit(1)
        .get();

    if(feedback.empty) return null;

    const feedbackDoc = feedback.docs[0];
    return {
        id: feedbackDoc.id,
        ...feedbackDoc.data()
    } as Feedback;
}

export async function getFeedbackWithAccess(params: { interviewId: string; currentUserId: string }): Promise<Feedback | null> {
    const { interviewId, currentUserId } = params;
    
    // First, get the interview to see who created it
    const interview = await getInterviewById(interviewId);
    if (!interview) return null;
    
    // Get feedback for this interview
    const feedback = await db.collection('feedback')
        .where('interviewId', '==', interviewId)
        .limit(1)
        .get();
    
    if(feedback.empty) return null;
    
    const feedbackDoc = feedback.docs[0];
    const feedbackData = feedbackDoc.data();
    
    // Allow access if user is either:
    // 1. The person who took the interview (feedbackData.userId)
    // 2. The person who created the interview (interview.userId)
    if (feedbackData.userId === currentUserId || interview.userId === currentUserId) {
        return {
            id: feedbackDoc.id,
            ...feedbackData
        } as Feedback;
    }
    
    return null; // No access
}
