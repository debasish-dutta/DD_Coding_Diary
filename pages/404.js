import React from 'react'
import Head from 'next/head';
import Image from 'next/image'

const Custon404 = () => {
  return (
    <div className="lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2">
        <Head>
        <title>404: Page Not Found || DD Coding Diary</title>
      </Head>
      <img src="/fof.jpg" alt="404:Error" className='w-full' />
    </div>
  )
}

export default Custon404