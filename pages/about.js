import Head from 'next/head';
import { PostCard, PostWidget, Categories} from '../components/index';
import { getPosts } from '../services';

export default function About() {
  return (
    <div className="px-10 m-10">
      <Head>
        <title>About me || DD Coding Diary</title>
      </Head>
      <section className="bg-white shadow-lg rounded-lg">

      </section>
    </div>
  )
}