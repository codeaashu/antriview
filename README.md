<div align="center"> 
<a href="https://antriview.systems/" target="_blank"><img src="./public/antriviewslogan.png" width="750px" /></a>
</div></br>

<div align="center"> 
<img src="./public/antriviewicon.png" width="150px" /><br>
<h1 align="center"><a href="https://antriview.systems/"><strong>antriview.systems</strong></a></h1>

<a href="https://antriview.systems/" target="_blank"><img src="./public/antriviewpunchline.png" width="750px" /></a>

<!--<h4 align="center">✦ Transform your GitHub journey into a professional resume in seconds! ✦</h4>-->
  
  
`Antriview is a AI powered mock interview preparation platform that utilizes real time AI voice agents to simulate realistic interview experiences. Designed to help users practice and enhance their communication and interview skills, the platform offers an immersive environment where users interact with voice based AI agents, receive instant feedback, and track their improvement over time.`
<hr></div>


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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
