import fs from "fs";
import path from "path";
import { Feed } from "feed";
import { getPosts, getPodcasts } from "../services";

export default async function generateRssFeed() {
  const allPosts = await getPosts();
  const allPodcasts = await getPodcasts();

  const siteURL = process.env.VERCEL_URL || "localhost:3000";
  const date = new Date();
  const rssFolder = path.join(process.cwd(), "/public/rss");
  const author = {
    name: "Debasish Dutta",
    email: "thedemoniccoder@gmail.com",
    link: "https://twitter.com/ddmasterdon",
  };

  const feed = new Feed({
    title: "DD Coding Diary",
    description: "A personal log of my journey of coding and tech adventures.",
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Debasish Dutta`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
      atom: `${siteURL}/rss/feed.atom`, // atom fromat
    },
    author,
  });

  allPosts.forEach((post) => {
    console.log();

    feed.addItem({
      title: post.node.title,
      id: `${siteURL}/blog/${post.node.slug}`,
      link: `${siteURL}/blog/${post.node.slug}`,
      description: post.node.excerpt,
      content: post.node.content.html,
      image: post.node.featuredImage,
      date: new Date(post.node.createdAt),
    });
    post.node.categories.map((cat) => feed.addCategory(cat.name));
  });
  //  allPodcasts.forEach((post) => {
  //     feed.addItem({
  //      title: post.node.title,
  //      id: `${siteURL}/podcasts/${post.node.slug}`,
  //      link: `${siteURL}/podcasts/${post.node.slug}`,
  //      description: post.node.excerpt,
  //      content: post.node.content.html,
  //      image: post.node.featuredImage,
  //      date: new Date(post.node.createdAt),
  //     });
  //    });

  if (!fs.existsSync(`${rssFolder}`))
    fs.mkdirSync(`${rssFolder}`, { recursive: true });
  // if (!fs.existsSync("./public/rss"))
  //   fs.mkdirSync("./public/rss", { recursive: true });
  console.log(rssFolder);
  fs.writeFileSync(`${rssFolder}/feed.xml`, feed.rss2());
  fs.writeFileSync(`${rssFolder}/feed.json`, feed.json1());
  fs.writeFileSync(`${rssFolder}/feed.atom`, feed.atom1());
}
