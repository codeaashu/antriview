// import Image from "next/image";
// import Link from "next/link";

// export default function ComingSoon() {
//   const problems = [
//     {
//       title: "Lack of Realistic Interview Practice",
//       description: "Most job seekers especially freshers and first-time applicants don't get access to real-time, spoken mock interviews that simulate actual interview stress and dynamics. Practicing in silence or with static text doesn't reflect the pressure of a real conversation."
//     },
//     {
//       title: "Outdated Prep Culture Focuses Only on Coding",
//       description: "Platforms like LeetCode treat interview prep as a puzzle-solving game. But companies hire for more than just code, they evaluate the Communication clarity, Behavioral alignment, Confidence under pressure, Cultural fit."
//     },
//     {
//       title: "No Feedback After Interviews",
//       description: "Companies often reject candidates with a generic &ldquo;Unfortunately…&rdquo; email, offering no explanation or constructive feedback. Candidates are left in the dark, unsure of what went wrong or how to improve."
//     },
//     {
//       title: "Institutions Lack Scalable Practice & Performance Insights",
//       description: "Universities and career services struggle to provide 1-to-1, voice based mock interviews or personalized coaching at scale due to limited faculty, time, and resources. Moreover, most institutions lack a system to track and analyze students' professional growth."
//     }
//   ];

//   const solutions = [
//     {
//       title: "Simulate Real-time Interviews",
//       description: "Experience realistic, voice based interviews with intelligent AI agents."
//     },
//     {
//       title: "Personalised Feedback",
//       description: "Receive instant, actionable insights based on real-time speech analysis. Antriview fills the gap left by real companies giving users the feedback they never get after real interviews."
//     },
//     {
//       title: "Track Your Progress",
//       description: "Monitor your growth, identify strengths, and pinpoint areas for improvement. Enable progress tracking to identify strengths & weaknesses."
//     },
//     {
//       title: "Fast Interview Creation",
//       description: "Simplify mock interview creation through conversational AI."
//     },
//     {
//       title: "Scalable for Institutions & Professionals",
//       description: "Supports premium plans for universities, bootcamps, and professionals with bulk access, admin dashboards, and performance reports."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      
//       {/* Animated background elements */}
//       <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//       <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//       <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
//       <div className="relative z-10">
//         {/* Coming Soon Header */}
//         <div className="flex justify-center pt-8 pb-4">
//           <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 flex items-center space-x-3">
//             <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center pulse-glow">
//               <div className="w-3 h-3 bg-white rounded-full pulse-professional"></div>
//             </div>
//             <span className="text-white text-lg font-semibold">Coming Soon</span>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Logo and Brand Section */}
//           <div className="text-center mb-16">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
//               <Image
//                 src="/logo.svg"
//                 alt="Antriview Logo"
//                 width={80}
//                 height={80}
//                 className="w-16 h-16 sm:w-20 sm:h-20"
//               />
//               <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
//                 Antriview
//               </h1>
//             </div>
            
//             {/* Main Headlines */}
//             <div className="space-y-4 mb-12">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
//                 The System for Systems That Never Worked.
//               </h2>
//               <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
//                 The Only System Built to Make You Unbreakable.
//               </h3>
//             </div>

//             {/* Description */}
//             <div className="max-w-5xl mx-auto">
//               <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
//                 The voice-driven war against broken interview prep has begun. Get ready for the future of interview preparation. 
//                 <span className="text-purple-400 font-semibold"> AI-powered Interview practice platform</span> where you 
//                 <span className="text-blue-400 font-semibold"> Practice Real Interviews. In Real Time. With a Real AI Powered Voice</span> and 
//                 receive <span className="text-green-400 font-semibold">instant feedback</span> to help you land your dream job.
//               </p>
//             </div>
//           </div>

//           {/* Problems Section */}
//           <div className="mb-20">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">The Problems We Solve</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {problems.map((problem, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
//                   <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{problem.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{problem.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Solutions Section */}
//           <div className="mb-20">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">How Antriview Solves This</h2>
//             <p className="text-center text-gray-300 mb-12 text-lg">Our comprehensive solution addresses every pain point</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {solutions.map((solution, index) => (
//                 <div key={index} className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
//                   <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{solution.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Final Punch Line */}
//           <div className="text-center mb-16">
//             <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-red-400/30">
//               <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight space-y-4">
//                 <p>&ldquo;You never lost the job because of a wrong answer.</p>
//                 <p className="text-red-400">You lost it in the first 90 seconds.</p>
//                 <p>Antriview is built to break that pattern — through pressure, practice, and precision feedback.</p>
//                 <p className="text-orange-400">This isn&apos;t your friendly prep tool.</p>
//                 <p>This is what real interview training feels like.&rdquo;</p>
//               </blockquote>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center pb-12">
//             <p className="text-gray-400 text-sm mb-4">
//               Let&apos;s connect on LinkedIn and stay updated with Antriview.
//             </p>
//             <Link 
//               href="https://www.linkedin.com/in/ashutoshkumaraashu/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
//             >
//               Connect on LinkedIn →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
