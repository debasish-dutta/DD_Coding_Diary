import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ podcast }) => {
  return (
    <div className="flex w-full justify-left flex-nowrap flex-grow mb-10">
  <div className="flex grow w-full flex-col  rounded-lg bg-white shadow-lg">
    <img className=" w-16 flex-none h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
        src={podcast.featuredImage.url}
        alt={podcast.title}
        />
    <div className="p-6 flex flex-col justify-end">
      <div className='flex font-small text-gray-700'>
            <svg className="mr-1 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>
                {moment(podcast.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
      <h2 className='transistion duration-700 text-center mb-2 cursor-pointer 
              hover:text-pink-600 text-3xl font-semibold'>
          <Link href={`/podcast/${podcast.slug}`}>
          {podcast.title}
          </Link>
        </h2>
      <p className="text-center text-xs text-gray-700 font-normal mb-8">
      {podcast.excerpt}
      </p>
      <div className="text-gray-600 text-xs">
          <Link href="/">
                <svg className='group h-12 w-12 fill-transparent transistion duration-500 transform hover:-translate-y-1 hover:scale-110 cursor-pointer' viewBox="0 0 385 385" xmlns="http://www.w3.org/2000/svg">
                    <circle className=" stroke-[20px] stroke-indigo-400" cx="192.5" cy="192.5" r="184.5"/>
                    <g className='group-hover:fill-cyan-600' filter="url(#filter0_d_111_8)">
                        <path className='stroke-[26] stroke-cyan-600' d="M328.5 183.474C335.833 187.708 335.833 198.292 328.5 202.526L136.5 313.378C129.167 317.611 120 312.319 120 303.851L120 82.1488C120 73.681 129.167 68.3886 136.5 72.6225L328.5 183.474Z" />
                        <path className=' stroke-inherit' d="M328.5 183.474C335.833 187.708 335.833 198.292 328.5 202.526L136.5 313.378C129.167 317.611 120 312.319 120 303.851L120 82.1488C120 73.681 129.167 68.3886 136.5 72.6225L328.5 183.474Z" stroke-miterlimit="1.41421" />
                    </g>
                    <defs>
                        <filter id="filter0_d_111_8" x="108" y="63.1204" width="238" height="267.759" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_8"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_8" result="shape"/>
                        </filter>
                    </defs>
                </svg>
          </Link>
          </div>
    </div>
  </div>
</div>
  )
}

export default PostCard