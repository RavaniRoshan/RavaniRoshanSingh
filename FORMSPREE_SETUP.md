# Formspree Setup Guide

This project uses [Formspree](https://formspree.io/) to handle contact form submissions without a backend server.

## How to Configure Your Formspree Key

To make the contact form work with your own email/Formspree account, follow these steps:

### 1. Get Your Formspree Endpoint

1.  Go to [Formspree.io](https://formspree.io/) and sign up or log in.
2.  Click **+ New Form**.
3.  Name your form (e.g., "Portfolio Contact") and select your project.
4.  Once created, you will see an **Endpoint** URL. It looks like this:
    `https://formspree.io/f/xvqagqvp`
    (The last part `xvqagqvp` is your unique Form ID).

### 2. Update the Application

You have two options to add this key to your application.

#### Option A: Direct Replacement (Quickest)

1.  Open the file `src/pages/Contact.tsx`.
2.  Search for the existing Formspree URL: `https://formspree.io/f/mgvgyzyd`.
3.  Replace it with your unique endpoint URL from Step 1.

```typescript
// src/pages/Contact.tsx

// ... inside handleSubmit function
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
  // ...
});
```

#### Option B: Using Environment Variables (Recommended)

1.  Create a file named `.env` in the root directory of your project (if it doesn't exist).
2.  Add your Formspree endpoint URL:
    ```
    VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
    ```
3.  Update `src/pages/Contact.tsx` to use this variable:

    ```typescript
    // Replace the hardcoded string with:
    const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      // ...
    });
    ```

### 3. Verify

1.  Run the application locally (`pnpm dev`).
2.  Fill out the contact form and submit.
3.  Check your email or Formspree dashboard to confirm you received the submission.
