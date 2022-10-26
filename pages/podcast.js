import Head from 'next/head';
import { PodcastCard, PostWidget, Categories} from '../components/index';
import { getPodcasts } from '../services';

export default function Podcast({ podcasts }) {
  return (
    <div className="px-10 m-10">
    <Head>
        <title>All Podcast Episodes || DD Coding Diary</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        <div className='lg:col-span-8 col-span-1'>
        {/* {podcasts.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast.node} />
          ))} */}
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