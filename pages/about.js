import Head from 'next/head';
import { PostCard, PostWidget, Categories} from '../components/index';
import { getPosts } from '../services';

export default function About() {
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
      <Head>
        <title>About me || DD Coding Diary</title>
      </Head>
      <section className="bg-white shadow-lg rounded-lg">
      <div class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div class="w-1/3 md:w-1/2 lg:w-full lg:max-w-lg">
          <img class="rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80" alt="" srcset="" />
        </div>
        <div class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pf-24">
          <h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">About Me</h1>
          <h2 class="title-font mb-2 text-xl font-medium text-gray-900 sm:text-2xl">This Blog and Podcast</h2>
          <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        </div>
      </div>
      </section>
    </div>
  )
}