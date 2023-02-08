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
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="w-1/3 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="rounded-lg object-cover object-center" src="dd_ll.jpeg" alt="" srcset="" />
        </div>
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pf-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">About Me</h1>
          <h2 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-2xl">This Blog</h2>
          <p className="mb-4 leading-relaxed">I started blogging to share my programming experiences. I have been programming since 2013, starting with C & C++ and later JS and PHP to understand the web. Then I moved to Python to try out scripting and Machine Learning. As I wanted to do something during my "not programming" time, I thought what's better than to write about my experiences, which led me to start this blog.</p>
          <p className='mb-8 leading-relaxed'>Currently, I am a researcher in the field of Computer Science and I code during my free time as well. ALso, I also tinker with electronics as a hobby. I'll be slowly uploading all my past and future projects here along the source code on github. Python used to be my language of choice but now I tend to stick more with C++ & Rust. I also enjoy occasional manga, anime and am a daily reader of some light novels.</p>
          {/* <h2 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-2xl">This Podcast</h2> */}
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non tenetur consectetur ipsam, provident velit architecto doloremque, modi assumenda quibusdam harum cupiditate id accusamus rem impedit alias facere praesentium eaque natus.</p> */}
        </div>
      </div>
      </section>
    </div>
  )
}