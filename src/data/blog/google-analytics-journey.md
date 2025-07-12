---
title: "Tracking Growth with Google Analytics: A Beginner’s Implementation Guide"
description: "Learn how I integrated Google Analytics into my portfolio and what I discovered from traffic insights and user behavior data."
pubDatetime: 2025-06-20T00:00:00.000Z
author: "Singh Harsh Rahulkumar"
tags: ["Google Analytics", "Web Dev", "Portfolio", "Tracking"]
draft: false
---

When I launched my portfolio, I wanted to know:  
**Who’s visiting it? Where from? What pages?**  
That’s when I turned to **Google Analytics**.

## 🔍 Why Google Analytics?

It helps you track:
- Page views & unique users
- Bounce rate
- Traffic sources (referrals, search, direct)
- Device and location stats

## 🚀 How I Integrated It

1. Created a GA4 property on [Google Analytics](https://analytics.google.com/)
2. Grabbed the measurement ID (e.g., `G-XXXXXXXX`)
3. Added this tracking script to my Astro site:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
