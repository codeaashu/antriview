# Coming Soon Mode Setup

This project includes a beautiful coming soon page that can be easily toggled on/off.

## How to Enable Coming Soon Mode

1. **Set the environment variable** in your `.env.local` file:
   ```bash
   NEXT_PUBLIC_COMING_SOON=true
   ```

2. **Restart your development server**:
   ```bash
   npm run dev
   ```

3. **Visit your site** - you'll now see the stunning coming soon page instead of the normal site.

## How to Disable Coming Soon Mode (Launch Your Site)

When you're ready to launch your site:

1. **Update the environment variable** in your `.env.local` file:
   ```bash
   NEXT_PUBLIC_COMING_SOON=false
   ```

2. **Restart your development server**:
   ```bash
   npm run dev
   ```

3. **Your normal site will now be live!**

## Features of the Coming Soon Page

- 🎨 **Beautiful gradient background** with animated elements
- 🚀 **Professional design** with your logo and branding
- 📱 **Fully responsive** - looks great on all devices
- ✨ **Smooth animations** and modern UI effects
- 🎯 **Feature preview** showing what's coming
- 📧 **Call-to-action buttons** for waitlist/notifications

## Customizing the Coming Soon Page

The coming soon page is located at `components/ComingSoon.tsx`. You can:

- Update the text and messaging
- Change the expected launch date
- Modify the feature previews
- Add email capture functionality
- Update colors and styling
- Add social media links

## Production Deployment

For production deployment:

1. Set `NEXT_PUBLIC_COMING_SOON=true` in your hosting platform's environment variables
2. Deploy your site
3. When ready to launch, change it to `false` and redeploy

## No Code Changes Required

The beauty of this system is that you never need to modify your actual site code. Just toggle the environment variable!

