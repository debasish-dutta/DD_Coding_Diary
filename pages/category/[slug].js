import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost, getCategoryPodcast, getCategoryName } from '../../services';
import { PostCard, PodcastCard, Categories, Loader } from '../../components/index';

const CategoryPost = ({ posts, name }) => {
  const router = useRouter();

  if (router.isFallback) {
      return <Loader />;
  }
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
      <Head>
        <title>{ name } || DD Coding Diary</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <h1 className=''>ALL { name } blogs</h1>
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
  const post = await getCategoryPost(params.slug);
  const podcasts = await getCategoryPodcast(params.slug);
  const name = await getCategoryName(params.slug);

  const posts = post || podcasts;

  return {
    props: {posts, name},
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