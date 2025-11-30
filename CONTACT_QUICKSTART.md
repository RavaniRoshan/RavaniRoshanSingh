# Contact Page - Quick Start 🚀

## ⚡ What You Need to Do (3 Steps)

### 1️⃣ Get Resend API Key
- Visit: https://resend.com
- Sign up (it's free!)
- Go to **API Keys** → **Create API Key**
- Copy your key (starts with `re_`)

### 2️⃣ Add to `.env.local`
```env
RESEND_API_KEY=re_your_actual_key_here
```

### 3️⃣ Add to Vercel
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Add `RESEND_API_KEY` with your key
- Save and redeploy

## ✅ That's It!

Your contact page is ready at: `/contact`

## 🎨 Design Preview

Your new contact page features:

```
┌─────────────────────────────────────────┐
│  🎨 Let's Connect                        │
│  Have a project in mind? Drop a message │
├─────────────────────────────────────────┤
│                                          │
│  ┌──────────────────────────────────┐  │
│  │ Name                              │  │
│  │ [Your name___________________]    │  │
│  │                                    │  │
│  │ Email                             │  │
│  │ [your.email@example.com______]    │  │
│  │                                    │  │
│  │ Message                           │  │
│  │ [Tell me about your project...   │  │
│  │  _____________________________]   │  │
│  │                                    │  │
│  │  [🚀 Send Message]                │  │
│  └──────────────────────────────────┘  │
│                                          │
│  Or reach out directly at               │
│  📧 ravaniroshansingh@gmail.com         │
└─────────────────────────────────────────┘
```

## 🎭 Features

✨ **Glassmorphism design** matching your portfolio
🌈 **Blue-to-purple gradients** 
🌙 **Dark mode support**
📱 **Fully responsive**
✅ **Form validation**
🔄 **Loading states**
🎉 **Success notifications**
🎯 **Floating animated elements**

## 🧪 Test Locally

```bash
npm run dev
```

Navigate to: `http://localhost:5173/contact`

## 📧 Email Preview

When someone contacts you, you'll receive:

```
─────────────────────────────────────
📬 New Contact Form Submission

Name: John Doe
Email: john@example.com

Message:
Hey! Love your portfolio. I'd like to
discuss a project with you...
─────────────────────────────────────
```

## 🎯 Navigation

Users can find your contact page:
- ✅ Header navigation: **"contact"** button
- ✅ Direct URL: `/contact`
- ✅ Email fallback link on the page

## 🎊 Design Details

The page matches your portfolio perfectly with:

- Same glassmorphism effect as your About section
- Matching gradient buttons (blue → purple)
- Consistent typography and spacing
- Same floating decorative dots
- Smooth entrance animations
- Hover effects on all interactive elements

## 💡 Pro Tips

1. **Test the form** before deploying to production
2. **Check spam folder** for test emails
3. **Customize email template** in `api/contact.ts`
4. **Add more fields** easily in `src/pages/Contact.tsx`

## 🚀 Deploy

```bash
git add .
git commit -m "Add contact page"
git push
```

Vercel will auto-deploy!

---

**Need help?** Check `CONTACT_SETUP.md` for detailed documentation.
