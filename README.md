# Chattanooga Sparkle Clean

A premium commercial cleaning service website built with Next.js 14, TypeScript, and Tailwind CSS.

**Status**: Ready for deployment on Vercel

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

### Required for Contact Form

The contact form requires a Resend API key to send emails.

1. **Get a Resend API Key:**
   - Sign up at [https://resend.com](https://resend.com)
   - Go to API Keys in your dashboard
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **For Local Development:**
   - Create a `.env.local` file in the project root
   - Add: `RESEND_API_KEY=re_your_api_key_here`
   - Restart your dev server

3. **For Vercel Deployment:**
   - Go to your Vercel project → Settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key value
   - Select all environments (Production, Preview, Development)
   - Save and redeploy

## Deployment on Vercel

This project is configured for deployment on Vercel.

### Vercel Settings

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave blank)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

### Troubleshooting 404 Errors

If you're experiencing 404 errors on Vercel:

1. **Check Build Logs**: Go to Vercel Dashboard → Your Project → Deployments → Latest Deployment → Build Logs
2. **Verify Framework Detection**: Ensure Vercel detects Next.js automatically
3. **Check Routes**: Ensure `app/page.tsx` exists and is exporting a default component
4. **Verify Root Layout**: Ensure `app/layout.tsx` exists and exports a default RootLayout component
5. **Redeploy**: Try triggering a new deployment after verifying settings

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
├── lib/                # Utilities and config
└── public/             # Static assets
```

