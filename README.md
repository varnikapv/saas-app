![Cover Image](/public/images/image.jpeg)

# AI Companion SaaS Platform

An interactive educational platform that enables users to create and interact with AI-powered voice companions. Built with Next.js, this application allows learners to engage with virtual tutors across various subjects through voice and text conversations.

## Features

- **🤖 AI Companions Library**: Browse and interact with pre-built educational companions
- **✨ Create Custom Companions**: Design personalized AI tutors tailored to specific subjects and topics
- **🔊 Voice Integration**: Real-time voice conversations powered by Vapi AI
- **📚 Subject Filtering**: Organized by subjects and topics for easy discovery
- **🔖 Bookmarking**: Save favorite companions for quick access
- **🔐 Secure Authentication**: User management via Clerk
- **💳 Subscription Model**: Premium features with subscription support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: Vapi AI
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Monitoring**: Sentry

## Getting Started

### 1. Set up Clerk Authentication

This project uses [Clerk](https://clerk.com/) for authentication. Before running the development server:

1. Sign up for a free account at [clerk.com](https://clerk.com)
2. Create a new application in your Clerk Dashboard
3. Go to [API Keys](https://dashboard.clerk.com/last-active?path=api-keys) in your Clerk Dashboard
4. Copy your Publishable Key and Secret Key
5. Open `.env.local` and replace the placeholder values:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_actual_publishable_key_here
CLERK_SECRET_KEY=your_actual_secret_key_here
```

### 2. Run the Development Server

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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
