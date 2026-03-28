// ─────────────────────────────────────────────────────────────
//  CONTENT — edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────
//
//  HOW TO UPDATE "Currently":
//  1. Copy the current entry below into the `archive` array
//     and set its `to` date to today's month
//  2. Update `currently` with your new status and reset `since`
//
//  HOW TO ADD A BLOG POST:
//  Add an object to `posts` like:
//  { title: "My thoughts on X", date: "2026-04-01" }
//
// ─────────────────────────────────────────────────────────────

export const currently = {
  text: "finishing the semester.",
  since: "Mar 2026",
}

export const archive = [
  // Entries are added here when "currently" changes.
  // Format: { text: "...", from: "Mon YYYY", to: "Mon YYYY" }
  //
  // Example:
  // { text: "finishing the semester.", from: "Mar 2026", to: "Apr 2026" },
]

export const posts = [
  // Blog posts go here.
  // Format: { title: "...", date: "YYYY-MM-DD", url: "posts/filename.html" }
  {
    title: "Getting into robotics software engineering",
    date: "2026-03-28",
    url: "posts/robotics-roadmap.html",
  },
]
