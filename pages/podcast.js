import Head from 'next/head';
import { PodcastCard, PostWidget, Categories} from '../components/index';
import { getPodcasts } from '../services';

export default function Podcast({ podcasts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>DD Coding Diary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        <div className='lg:col-span-8 col-span-1'>
        {podcasts.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast.node} />
          ))}
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