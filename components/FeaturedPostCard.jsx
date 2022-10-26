import React from 'react'
import Link from 'next/link';

const FeaturedPostCard = ({blogPost}) => {
  return (
     <div className='relative container'>
     <div className="rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${blogPost.featuredImage.url}')` }}>
     <div className="absolute inset-x-0 bottom-0 flex flex-col rounded-lg items-center justify-center">
     <Link key={blogPost.slug} href={`/blog/${blogPost.slug}`}>
       <p className="text-white text-shadow font-bold text-2xl text-center hover:text-sky-700 cursor-pointer">{blogPost.title}</p>
     </Link>
     <p className="text-white text-shadow font-semibold text-xs p-2">{blogPost.excerpt}</p>
     <div className="justify-end">
          {blogPost.categories.map((category, index) => (
              <Link key={category.slug} href={`/category/${category.slug}`}> 
             <span className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-pink-500 mr-2 mb-3">{category.name}</span>
        </Link>
          ))}
          </div>
     </div>
     </div>
     </div>
  )
}

export default FeaturedPostCard