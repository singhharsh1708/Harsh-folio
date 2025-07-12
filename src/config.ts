export const SITE = {
  website: "https://harshsingh.dev", // your future domain or leave blank for now
  author: "Harsh Singh",
  profile: "https://github.com/singhharsh1708",
  desc: "Harsh Singh — Developer & Writer | Portfolio, Projects & Blogs",
  title: "Harsh Singh",
  ogImage: "harsh-og.jpg", // Optional: replace with your own image in `public/`
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false, // we are not using Archives page
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/singhharsh1708/harsh-portfolio/edit/main/",
  },
  dynamicOgImage: false, // if you don’t use Astro’s dynamic OG plugin
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
} as const;
