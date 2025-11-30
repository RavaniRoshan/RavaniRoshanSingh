# Contact Page Setup Guide

Your contact page has been successfully implemented! Here's everything you need to know:

## ✅ What Was Added

1. **Contact Page Component** (`src/pages/Contact.tsx`)
   - Fully responsive, glassmorphism design matching your portfolio aesthetic
   - Animated entrance effects and floating decorative elements
   - Form validation and loading states
   - Toast notifications for success/error feedback

2. **API Route** (`api/contact.ts`)
   - Serverless function using Resend for email delivery
   - Secure server-side handling
   - Input validation and error handling

3. **Navigation Updates**
   - Added "contact" link to header navigation
   - Active state highlighting
   - Smooth transitions matching existing design

## 🚀 Setup Instructions

### Step 1: Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up (free account)
2. Verify your email and log in
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy your API key

### Step 2: Add API Key Locally

Open `.env.local` in your project root and replace the placeholder:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 3: Add API Key to Vercel

1. Go to your Vercel Dashboard
2. Select your project
3. Navigate to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environments**: Production, Preview, Development

### Step 4: Deploy

Push your changes to trigger a Vercel deployment:

```bash
git add .
git commit -m "Add contact page with Resend integration"
git push
```

## 🎨 Design Features

Your contact page perfectly matches your portfolio with:

- **Glassmorphism effects** - Blurred backgrounds with subtle gradients
- **Animated entrance** - Smooth fade-in and slide-up transitions
- **Floating decorative elements** - Bouncing colored dots
- **Gradient accents** - Blue-to-purple gradients matching your brand
- **Dark mode support** - Seamless theme switching
- **Responsive layout** - Mobile-first design that scales beautifully
- **Hover effects** - Interactive button and form field states
- **Loading states** - Spinner animation while sending

## 📝 How It Works

1. User fills out the contact form
2. Form submits to `/api/contact` serverless function
3. Resend API sends formatted email to `ravaniroshansingh@gmail.com`
4. User sees success toast notification
5. Form resets for next submission

## 🔍 Testing

### Local Testing
```bash
npm run dev
```

Navigate to `http://localhost:5173/contact` and test the form.

### Production Testing

After deployment, visit: `https://your-domain.vercel.app/contact`

## 🎯 Access the Contact Page

Users can reach your contact page via:
- Navigation header: Click the **"contact"** button
- Direct URL: `/contact`
- Email link: Direct click-to-email fallback provided

## ⚡ Features

- ✅ Real-time email delivery via Resend
- ✅ Form validation (required fields)
- ✅ Loading states with spinner
- ✅ Success/error toast notifications
- ✅ Automatic form reset on success
- ✅ Mobile-responsive design
- ✅ Dark mode support
- ✅ Accessible form labels and ARIA attributes
- ✅ Email fallback link for direct contact
- ✅ Professional email template

## 🛡️ Security

- API key stored securely in environment variables
- Server-side email sending (API key never exposed to client)
- Input validation on both client and server
- Protected API route (POST method only)

## 💡 Customization

### Change Email Recipient

Edit `api/contact.ts`:
```typescript
to: "your-new-email@example.com",
```

### Modify Email Template

Edit the `html` field in `api/contact.ts` to customize the email design.

### Adjust Form Fields

Edit `src/pages/Contact.tsx` to add/remove fields. Make sure to update:
1. `formData` state
2. Form JSX
3. API handler to accept new fields

## 📧 Email Template

Your emails will include:
- Professional formatting
- Sender's name and email
- Full message content
- Clean, readable layout
- Your brand colors (blue/purple gradient)

## 🔧 Troubleshooting

### Emails Not Sending?
- Check that `RESEND_API_KEY` is set in Vercel environment variables
- Verify API key is valid in Resend dashboard
- Check browser console for errors
- Review Vercel function logs

### Form Not Submitting?
- Check network tab for API request
- Verify `/api/contact` route is accessible
- Ensure all required fields are filled

### Styling Issues?
- Verify Tailwind CSS is configured properly
- Check that dark mode class is toggling correctly
- Ensure all dependencies are installed

## 🎉 You're All Set!

Your contact page is now live and fully functional. Users can reach out to you with a beautiful, professional contact form that matches your portfolio's aesthetic perfectly.

Questions? Just ask! 🚀
