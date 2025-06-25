import React from 'react';
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { dummyInterviews } from "@/constants"; 

import { Button } from "@/components/ui/button";

const page = () => {
    return (
        <>
<section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot2.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
      <h2>Your Interviews</h2>
      <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InterviewCard { ... interview} key={interview.id}/>
        ))}
        {/* <p>You haven&apos;t taken any interviews yet</p> */}
      </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InterviewCard { ... interview} key={interview.id}/>
        ))}
        </div>
      </section>
        </>
    )
}
export default page;