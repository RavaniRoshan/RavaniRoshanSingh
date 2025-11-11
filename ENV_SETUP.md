# Environment Variables Setup

## Files Created

### `.env` (Local Only - NOT in Git)
Contains your actual EmailJS credentials. **Never commit this file!**

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### `.env.example` (Safe to Commit)
Template showing what environment variables are needed. Share this with team members.

---

## How to Use

### 1. Fill in Your .env File

After you get your EmailJS credentials, replace the placeholder values in `.env`:

```bash
# Get these from EmailJS Dashboard
VITE_EMAILJS_PUBLIC_KEY=abc123xyz...
VITE_EMAILJS_SERVICE_ID=service_abc123...
VITE_EMAILJS_TEMPLATE_ID=template_abc123...
```

### 2. On Vercel (Production)

Add environment variables in Vercel Dashboard:
1. Go to your project → **Settings** → **Environment Variables**
2. Add each variable:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
3. Deploy!

### 3. Access in Code

Use anywhere in your app:
```typescript
import.meta.env.VITE_EMAILJS_PUBLIC_KEY
import.meta.env.VITE_EMAILJS_SERVICE_ID
import.meta.env.VITE_EMAILJS_TEMPLATE_ID
```

---

## ⚠️ Security Notes

- ✅ `.env` is in `.gitignore` - won't be committed
- ✅ `.env.example` is in Git - shows what's needed
- ✅ Vite automatically loads `.env` variables with `VITE_` prefix
- ✅ Only variables starting with `VITE_` are exposed to browser

---

## Next Steps

1. Complete EmailJS setup (see EMAILJS_SETUP.md)
2. Get your 3 credentials from EmailJS
3. Fill in `.env` file locally
4. Test locally with `pnpm dev`
5. Add credentials to Vercel environment variables
6. Deploy!

