import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-40 sm:pb-60 md:pb-80 mb-6'>
          <img 
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-40 sm:h-60  md:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" 
          />
        </div>
        <h1 className='transistion duration-700 text-center mb-8 cursor-pointer 
              hover:text-pink-600 text-3xl font-semibold'>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            {/* <img 
                alt={author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={author.photo.url} 
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{author.name}</p> */}
          </div>
          <div className='font-medium flex items-center text-gray-700 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 sm:ml-4 md:m-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className='px-1'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
        <div className='text-center'>
          <Link href={`/blog/${post.slug}`}>
            <span className='transistion duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
              Continue Reading
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard