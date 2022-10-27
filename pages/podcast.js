import Head from 'next/head';
import { PodcastCard, PostWidget, Categories} from '../components/index';
import { getPodcasts } from '../services';

export default function Podcast({ podcasts }) {
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
    <Head>
        <title>All Podcast Episodes || DD Coding Diary</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        <div className='lg:col-span-8 col-span-1'>
        {/* {podcasts.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast.node} />
          ))} */}
          <img src='/soon.jpg' alt='' className='w-full' />
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const podcasts = (await getPodcasts()) || [];

  return {
    props: { podcasts }
  }
}