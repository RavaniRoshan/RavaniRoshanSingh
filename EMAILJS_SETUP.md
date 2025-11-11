# EmailJS Setup Guide

## ✅ What's Already Done

- EmailJS package installed
- Connect page updated with EmailJS integration
- Environment variables configured
- Ready to receive emails at `ravaniroshansingh@gmail.com`

## 🚀 Final Setup Steps (REQUIRED)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create account using your email

### Step 2: Add Gmail as Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Follow instructions to connect your Gmail account
5. **Copy the Service ID** (looks like `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up template with these variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{purpose}}` - Purpose of connection
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email

**Example template body:**
```
New Message from: {{from_name}}
Email: {{from_email}}
Purpose: {{purpose}}

Message:
{{message}}
```

4. **Copy the Template ID** (looks like `template_xxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like `r0bIr9Q5oALBb8mxT`)

### Step 5: Fill Environment Variables

Edit `.env` file with your credentials:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### Step 6: Test Locally
1. Start dev server: `pnpm dev`
2. Go to `http://localhost:5173/connect`
3. Fill out the contact form
4. Click "Send Message"
5. Check your Gmail inbox

### Step 7: Deploy to Vercel
1. Add environment variables to Vercel:
   - Go to Project Settings → Environment Variables
   - Add the 3 variables
2. Push to GitHub
3. Vercel automatically deploys
4. Contact form works on production!

---

## � Checklist

- [ ] Created EmailJS account
- [ ] Added Gmail service
- [ ] Created email template
- [ ] Copied all 3 credentials
- [ ] Filled `.env` file
- [ ] Tested locally
- [ ] Added to Vercel
- [ ] Deployed successfully

---

## 💡 Quick Reference

| Item | Where to Find |
|------|---------------|
| Public Key | Account → API Keys |
| Service ID | Email Services |
| Template ID | Email Templates |
| Docs | [emailjs.com/docs](https://www.emailjs.com/docs/) |

---

## ✅ After Setup

Your contact form will:
- ✅ Accept visitor messages
- ✅ Send to your Gmail
- ✅ Show success message
- ✅ Work on Vercel
- ✅ Handle 200+ emails/month (free plan)
