import React from 'react';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { RouteParams } from '@/types/route-params';
import { getInterviewById, getFeedbackByInterviewId } from '@/lib/actions/general.action';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const Page = async ({ params }: RouteParams) => {
    try {
        const { id } = await params;
        const user = await getCurrentUser();

        if (!user) redirect('/sign-in');

        const interview = await getInterviewById(id);
        if (!interview) redirect('/');

        const feedback = await getFeedbackByInterviewId({
            interviewId: id,
            userId: user.id,
        });

        if (!feedback) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-2xl font-semibold mb-4">No Feedback Found</h1>
                    <p className="text-gray-600 mb-4">Feedback for this interview is not available yet.</p>
                    <Link href="/">
                        <Button>Go Back Home</Button>
                    </Link>
                </div>
            );
        }

    console.log(feedback);

    return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>{feedback?.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
    } catch (error) {
        console.error('Error loading feedback page:', error);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold mb-4">Error Loading Page</h1>
                <p className="text-gray-600 mb-4">There was an error loading this page.</p>
                <Link href="/">
                    <Button>Go Back Home</Button>
                </Link>
            </div>
        );
    }
}

export default Page;