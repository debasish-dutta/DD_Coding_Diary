import Head from 'next/head';
import { FeaturedPostCard, FeaturedPodcastCard } from '../components/index';
import { getFeaturedPosts, getFeaturedPodcasts } from '../services';
import generateRssFeed from '../utils/generateRSSFeed';

export default function Home({ posts, podcasts }) {
  // console.log(posts)
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
      <Head>
        <title>DD Coding Diary</title>
      </Head>

      {/* Blog Post Section */}
      <h1 className='bg-white w-full  p-2 mb-2  md:p-4 md:mb-4  rounded-lg lg:text-4xl font-extrabold md:text-2xl md:font-bold sm:text-sm sm:font-normal '>Featured Blog Posts</h1>
        <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
            <FeaturedPostCard key={index} blogPost={post} />
          ))}
        </main>
      {/* Podcast Section */}
      {/* <h1 className='bg-white w-full p-2 mb-2  md:p-4 md:mb-4  rounded-lg lg:text-4xl font-extrabold md:text-2xl md:font-bold sm:text-sm sm:font-normal'>Featured Podcast Episodes</h1> */}
        {/* <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {podcasts.map((podcast, index) => (
            <FeaturedPodcastCard key={index} podcast={podcast} />
           ))}
         </main> */}
    </div>
  )
}

export async function getServerSideProps() {
  // try {
  const posts = (await getFeaturedPosts()) || [];
  const podcasts = (await getFeaturedPodcasts()) || [];
  await generateRssFeed();
  // console.log(posts, podcasts)
// } catch (error) {
//   console.log(error)
// }
return {
  props: { posts, podcasts },
  revalidate: 25,
}
}