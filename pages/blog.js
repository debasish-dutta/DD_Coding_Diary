import Head from 'next/head';
import { PostCard, PostWidget, Categories} from '../components/index';
import { getPosts } from '../services';

export default function Blog({ posts }) {
  return (
    <div className="px-10 m-10">
      <Head>
        <title>All Blog Posts || DD Coding Diary</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
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
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}