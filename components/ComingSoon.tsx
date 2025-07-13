import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="Antriview Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            Antriview
          </h1>
        </div>

        {/* Main content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🚀 Something Amazing is Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Get ready for the future of interview preparation. 
            <span className="text-purple-400 font-semibold"> AI-powered practice sessions</span> and 
            <span className="text-blue-400 font-semibold"> instant feedback</span> to help you land your dream job.
          </p>
        </div>

        {/* Features preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Interviews</h3>
            <p className="text-gray-300">Practice with advanced AI agents tailored to your field</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Feedback</h3>
            <p className="text-gray-300">Get detailed analysis and improvement suggestions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Personalized</h3>
            <p className="text-gray-300">Customized questions based on your target role</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              🔔 Notify Me When Ready
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              📧 Join Waitlist
            </Button>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Currently in development</span>
          </div>
        </div>

        {/* Social links or additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Follow our journey • Expected launch: Q2 2025
          </p>
        </div>
      </div>
    </div>
  );
}
