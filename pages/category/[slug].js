import React from 'react';
import Head from 'next/head';

import { getCategories, getCategoryPost, getCategoryPodcast } from '../../services';
import { PostCard, PodcastCard, Categories } from '../../components';

const CategoryPost = ({ posts }) => {
  console.log(posts.node.name)
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>{posts.node.name} || DD Coding Diary</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const podcasts = await getCategoryPodcast(params.slug);

  console.log(posts)
  console.log(podcasts)
  return {
    props: {posts} || { podcasts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}