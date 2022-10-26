import Head from 'next/head';
import { FeaturedPostCard, FeaturedPodcastCard } from '../components/index';
import { getFeaturedPosts, getFeaturedPodcasts } from '../services';

export default function Home({ posts, podcasts }) {
  // console.log(posts)
  return (
    <div className="container px-10 m-10">
      <Head>
        <title>DD Coding Diary</title>
      </Head>

      {/* Blog Post Section */}
      <h1 className='bg-white w-full p-4 mb-4 rounded-lg text-4xl font-extrabold'>Featured Blog Posts</h1>
        <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
            <FeaturedPostCard key={index} blogPost={post} />
          ))}
        </main>
      {/* Podcast Section */}
      <h1 className='bg-white w-full p-4 my-4 rounded-lg text-4xl font-extrabold'>Featured Podcast Episodes</h1>
        {/* <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {podcasts.map((podcast, index) => (
            <FeaturedPodcastCard key={index} podcast={podcast} />
           ))}
         </main> */}
    </div>
  )
}

export async function getStaticProps() {
  // try {
  const posts = (await getFeaturedPosts()) || [];
  const podcasts = (await getFeaturedPodcasts()) || [];
  // console.log(posts, podcasts)
// } catch (error) {
//   console.log(error)
// }
return {
  props: { posts, podcasts }
}
}