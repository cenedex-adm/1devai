# Contact Form Setup Guide

This guide explains how to make the contact forms functional on the 1Dev.AI website.

## Overview

The website uses **Formspree** to handle contact form submissions. Formspree is a form backend service that receives form submissions and forwards them to your email.

Currently, the forms are configured with a placeholder form ID (`xyzypwwg`). You need to replace this with your own Formspree form ID.

---

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click **"Get Started"** or **"Sign Up"**
3. Create an account using your email or GitHub

---

## Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give your form a name (e.g., "1Dev Contact Form")
3. Enter the email address where you want to receive submissions
4. Click **"Create Form"**

---

## Step 3: Get Your Form ID

After creating the form, you'll see a form endpoint like:
```
https://formspree.io/f/YOUR_FORM_ID
```

Copy the **YOUR_FORM_ID** part (it looks like `xyzypwwg` or similar).

---

## Step 4: Update the Code

Replace the placeholder form ID in the following files:

### File 1: `src/app/page.tsx` (Homepage Contact Form)
Find this line (around line 37):
```typescript
const response = await fetch("https://formspree.io/f/xyzypwwg", {
```
Replace `xyzypwwg` with your form ID.

### File 2: `src/app/services/page.tsx` (Services Page Contact Form)
Find this line (around line 25):
```typescript
const response = await fetch("https://formspree.io/f/xyzypwwg", {
```
Replace `xyzypwwg` with your form ID.

### File 3: `src/components/FloatingLeadForm.tsx` (Floating Chat Button Form)
Find this line (around line 23):
```typescript
const response = await fetch("https://formspree.io/f/xyzypwwg", {
```
Replace `xyzypwwg` with your form ID.

### File 4: `src/components/InlineLeadForm.tsx` (Free Consultation Form)
Find this line (around line 26):
```typescript
const response = await fetch("https://formspree.io/f/xyzypwwg", {
```
Replace `xyzypwwg` with your form ID.

### File 5: `src/components/ExitIntentPopup.tsx` (Exit Intent Popup Form)
Find this line (around line 50):
```typescript
const response = await fetch("https://formspree.io/f/xyzypwwg", {
```
Replace `xyzypwwg` with your form ID.

---

## Quick Replace Command

You can replace all instances at once using search and replace in your code editor:

**Find:** `https://formspree.io/f/xyzypwwg`
**Replace with:** `https://formspree.io/f/YOUR_ACTUAL_FORM_ID`

---

## Step 5: Test the Forms

1. Deploy or run the website locally
2. Fill out a contact form and submit
3. Check your email for the submission
4. Check your Formspree dashboard for submission history

---

## Formspree Free Plan Limits

The free plan includes:
- **50 submissions per month**
- Basic spam filtering
- Email notifications

For higher volume, consider upgrading to a paid plan.

---

## Alternative: Use Multiple Forms

If you want different forms to go to different email addresses, create multiple forms in Formspree and use different form IDs for each:

- `FORM_ID_1` - Homepage contact form → sales@yourcompany.com
- `FORM_ID_2` - Quick contact (floating button) → support@yourcompany.com
- etc.

---

## Spam Protection (Optional)

Formspree includes built-in spam protection. For additional security, you can:

1. **Enable reCAPTCHA** in your Formspree dashboard
2. **Add honeypot fields** (already implemented in some forms)

---

## Form Fields Being Submitted

Each form submits the following data:

### Homepage Contact Form:
- First Name
- Last Name
- Email
- Business/Organization
- Service Interest
- Project Description

### Services Page Form:
- First Name
- Last Name
- Email
- Business/Organization
- Service Interest
- Project Description

### Floating Lead Form:
- Name
- Email
- Message

### Inline Lead Form (Free Consultation):
- Full Name
- Email
- Phone
- Company Name

### Exit Intent Popup:
- Name
- Email

---

## Troubleshooting

### Forms not submitting?
1. Check browser console for errors
2. Verify the form ID is correct
3. Make sure you're not blocked by ad blockers

### Not receiving emails?
1. Check your spam folder
2. Verify the email address in Formspree dashboard
3. Check Formspree submission history

### Getting too much spam?
1. Enable reCAPTCHA in Formspree
2. Add honeypot fields to your forms

---

## Support

- Formspree Documentation: https://help.formspree.io
- Formspree Support: support@formspree.io
