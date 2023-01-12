---
title: "Setup Google Analytics with Next.js (4 easy steps)"
date: '2023-01-09'
tags: ['development','nextjs']
draft: false
summary: Add Google Analytics to your Next.js app in 4 easy steps. Learn how to install the required package, add the tracking code, and test everything is working properly. Follow this guide to increase leads and improve your site's performance with Google Analytics.
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

# Topics covered:

In this blog post, we'll setup Google Analytics with your **Next.js app** and take it to the **next** level. (See what we did there? 😎)

Before we get started, it's important to note that Google Analytics is a powerful tool for tracking the performance of your website 🚀. By integrating it into your Next.js project, you'll be able to get valuable insights into things like how users are interacting with your site, where they're coming from, and what devices they're using.

So, let's get started! 🔥

# Setup your Google Analytcs profile

## Setting up a Google Analytics Account and Property

The first step in integrating Google Analytics with your Next.js project is to set up a Google Analytics account and property. Here's how to do it:

1. Go to the [Google Analytics website](https://analytics.google.com/) and click the "Sign In" button in the top right corner.
2. If you don't already have a Google account, you'll need to create one. Click the "**Create Account**" button and follow the prompts to set up your account.
3. Once you've signed in to your Google account, click the "**Admin**" button in the bottom left corner of the page.
4. In the "**Account**" section, click the "**Create Account**" button.
5. Enter a name for your account and select "**Web**" as the "**Industry Category**". Then click the "Get Tracking ID" button.
6. Review the terms of service (or maybe skip? 😅) and click the "**I Accept**" button.
7. You'll now see your tracking ID and a snippet of code. This code needs to be added to your Next.js project. We'll do that in the next step.

<br />

# Write the code. Break the internet. 👩🏻‍💻

## Integrating Google Analytics with Next.js using "nextjs-google-analytics"

Now that you have a Google Analytics account and property set up, it's time to integrate it into your Next.js project. One way to do this is by using the "**nextjs-google-analytics**" library. Here's how to do it:

1. Install the "nextjs-google-analytics" library by running the following command in your terminal:

```bash
npm install nextjs-google-analytics
```

2. Create a new file called `.env.local` in the root of the project and add the following code:

```bash
NEXT_PUBLIC_GID=G-XXXXXXXXXX
# Don't forget to replace "G-XXXXXXXXXX"
# with your Google Analytics tracking ID
```

3. Add the following code to your `_app.js` file:

```jsx
import '../styles/globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

// Don't forget to replace "G-XXXXXXXXXX"
// with your Google Analytics tracking ID
// in the .env.local file
const GID = process.env.NEXT_PUBLIC_GID

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId={GID} trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
```

4. You're all set! Google Analytics will now track page views for your Next.js project.

## Wrapping Up 📦

Congratulations, you've successfully integrated Google Analytics with your Next.js project! With this powerful tool, you'll be able to track the performance of your website and get valuable insights into how users are interacting with it.

There are a few other things you might want to consider doing with your Google Analytics integration. For example, you can track specific events on your website, such as button clicks or form submissions. To do this, you'll need to use the [Google Analytics tracking code](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) in your Next.js project.

You can also use Google Analytics to track users across multiple devices and sessions. This is called "cross-device tracking", and it can be useful for understanding how users interact with your website on different devices. To enable cross-device tracking, you'll need to set up [User-ID tracking](https://support.google.com/analytics/answer/3123662) in your Google Analytics account.

Finally, you may want to consider using [Google Tag Manager](https://www.google.com/analytics/tag-manager/) to manage your Google Analytics tracking code. This can make it easier to add and update tracking code on your website, as well as add other tracking and marketing tools.

I hope this blog post has been helpful in explaining how to integrate Google Analytics with your Next.js project. If you have any questions or need further assistance, feel free to leave a comment below or reach out to me on [Twitter](https://twitter.com/whynotacid). 

Happy tracking! 👀
