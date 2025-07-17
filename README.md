<div align="center"> 
<a href="https://antriview.systems/" target="_blank"><img src="./public/antriviewslogan.png" width="750px" /></a>
</div></br>

<div align="center"> 
<a href="https://antriview.systems/" target="_blank"><img src="./public/antriviewtext.png" width="350px" /></a><br><br>
<img src="./public/thisisantriview.png" width="750px" /><br>
<h1 align="center"><a href="https://antriview.systems/"><strong>✦ antriview.systems ✦</strong></a></h1>

<a href="https://antriview.systems/" target="_blank"><img src="./public/antriviewpunchline.png" width="750px" /></a>

<!--<h4 align="center">✦ Transform your GitHub journey into a professional resume in seconds! ✦</h4>-->
  
  
`Antriview is a AI powered mock interview preparation platform that utilizes real time AI voice agents to simulate realistic interview experiences. Designed to help users practice and enhance their communication and interview skills, the platform offers an immersive environment where users interact with voice based AI agents, receive instant feedback, and track their improvement over time.`
<hr><img src="./public/Interview Page.png" /></div>

## 🚀 Features

### 🎙️ 1. Simulate Real-Time Interviews  
Experience hyper-realistic, **voice-based interviews** with intelligent AI agents that mimic real interviewers — pressure and unpredictability included.

### 🧠 2. Personalized Feedback  
Get **instant, actionable insights** based on your tone, confidence, and clarity using real-time speech analysis.  
Antriview gives you the feedback that real interviewers never do — brutally honest, growth-focused, and always improving.

### 📊 3. Track Your Progress  
Monitor your communication skills with **visual analytics**, track your journey, and pinpoint **strengths and weaknesses**. Know exactly where you're growing — and where you need to level up.

### ⚡ 4. Fast Interview Creation  
Create full mock interviews in seconds using **conversational AI**.  
Skip the setup — just speak, and your personalized session begins.

### 🏫 5. Scalable for Institutions & Professionals  
Built for **universities, bootcamps, and career services**. Antriview offers bulk access, admin dashboards, and **performance insights** at scale.  
Because the future of hiring prep is not 1:1 — it’s scalable, smart, and voice-powered.

---

## 🛠️ Tech Stack

### 🔷 Frontend (UI & Real-Time Voice Interaction)
- **Next.js** – React-based framework for scalable frontends  
- **TypeScript** – Type-safe development  
- **Tailwind CSS** – Utility-first CSS for responsive styling  
- **shadcn/ui** – Accessible, modern UI components  
- **Vapi AI SDK** – Real-time voice assistant integration  
- **Zod** – Schema validation & safe form handling

### 🔶 Backend (Logic & AI Operations)
- **Next.js API Routes** – Serverless backend logic  
- **Firebase Authentication** – Secure auth (Email, Google)  
- **Firebase Cloud Functions** – AI handling, session management, feedback logic

### 🔵 Database (Persistent User & Interview Data)
- **Firebase Firestore** – NoSQL, real-time DB  
  - Stores: user profiles, interview responses, generated questions, feedback reports

### 🤖 AI & NLP (Voice Simulation & Feedback Intelligence)
- **Vapi AI** – Voice-based AI interviewer (input/output)  
- **Google Gemini API** – Natural language processing to:  
  - Generate adaptive interview questions  
  - Analyze spoken responses  
  - Deliver smart, contextual feedback  
  - Continuously learn from user performance

---

<div align="center"> 
  <h3 align="center"><strong>💡Antriview is not just a product. It’s a new standard in interview preparation.</strong></h3>
Your Ruthless, Real-Time AI Interviewer — Built for Pressure. Not Just Practice.
</div>

<hr>

# 🚀 Getting Started Setup Procedure ⚙️

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your actual configuration values in `.env.local`:
   - Firebase configuration (API keys, project ID, etc.)
   - Google AI API key
   - VAPI configuration

**Important**: Never commit `.env.local` or any environment files containing real API keys to version control.

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Important: Environment Variables for Production

When deploying to Vercel or any other platform, make sure to add all environment variables from your `.env.local` file to your deployment platform's environment variables section:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all the variables from `.env.local`

**Required Environment Variables:**
- `FIREBASE_PROJECT_ID`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_CLIENT_EMAIL`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `GOOGLE_GENERATIVE_AI_API_KEY`
- `NEXT_PUBLIC_VAPI_WEB_TOKEN`
- `NEXT_PUBLIC_VAPI_WORKFLOW_ID`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<hr>

## 👨‍💻 Built By

**Ashutosh Kumar**  
[🌐 www.ashutoshkumar.me](https://www.ashutoshkumar.me)  
[💻 GitHub: @codeaashu](https://github.com/codeaashu)  
🆔 College ID: **17427**

<hr>
