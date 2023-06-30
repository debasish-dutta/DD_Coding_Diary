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
      <div className="container mx-auto flex flex-col items-center px-5 py-20 md:flex-row">
        <div className="w-1/3 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="rounded-lg object-cover object-center" src="dd_ll.jpeg" alt="author image" />
        </div>
        <div className="mb-12 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pf-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">About Me</h1>
          <h2 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-2xl">This Blog</h2>
          <p className="mb-4 leading-relaxed">Programming has been a long-standing passion of mine, ever since I started dabbling with C and C++ back in 2013. As I grew more interested in web development, I began exploring JavaScript and PHP to better understand how websites are built. From there, I ventured into Python, where I discovered my love for scripting and delved deeper into Machine Learning.</p>
          <p className='mb-6 leading-relaxed'>As much as I enjoy programming, I also wanted to pursue other interests during my free time. I found myself drawn to electronics, and I've been tinkering with various projects for the past few years. It's a great way to unwind and exercise my creativity outside of programming.</p>
          <p className='mb-6 leading-relaxed'>Recently, I decided to start a blog where I could share my experiences and connect with others in the programming community. I'm excited to share the projects I've worked on in the past, as well as my future endeavors. I believe that by sharing my successes and failures, I can help others learn from my experiences and encourage them to try new things.</p>
          <p className='mb-6 leading-relaxed'>Currently, I'm working as a researcher in Computer Science, which allows me to apply my programming skills in exciting and innovative ways. However, I still make time to code in my free time, and I've been focusing more on C++ and Rust lately. I find these languages to be incredibly powerful and versatile, and I enjoy the challenge of working with them.</p>
          <p className='mb-6 leading-relaxed'>Aside from programming and electronics, I also enjoy reading light novels and watching anime. I find that immersing myself in these hobbies helps me relax and recharge after a long day of work. Balancing work and leisure is crucial to maintaining a healthy lifestyle, and I encourage others to find their own hobbies outside of their careers.</p>
          <p className='mb-8 leading-relaxed'>Overall, I'm excited to see where my programming journey takes me, and I'm looking forward to sharing it all with you on my blog.</p>
          {/* <h2 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-2xl">This Podcast</h2> */}
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non tenetur consectetur ipsam, provident velit architecto doloremque, modi assumenda quibusdam harum cupiditate id accusamus rem impedit alias facere praesentium eaque natus.</p> */}
        </div>
      </div>
      </section>
    </div>
  )
}