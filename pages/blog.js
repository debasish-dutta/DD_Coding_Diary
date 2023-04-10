import Head from 'next/head';
import { PostCard, PostWidget, Categories} from '../components/index';
import { getPosts } from '../services';

export default function Blog({ posts }) {
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
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
    props: { posts },
    revalidate: 25,
  }
}