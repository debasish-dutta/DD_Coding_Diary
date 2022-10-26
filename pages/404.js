import React from 'react'
import Head from 'next/head';
import Image from 'next/image'

const Custon404 = () => {
  return (
    <div className="px-10 m-10">
        <Head>
        <title>404: Page Not Found || DD Coding Diary</title>
      </Head>
      <img src="/fof.jpg" alt="404:Error" className='w-full' />
    </div>
  )
}

export default Custon404