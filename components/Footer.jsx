import React, { useContext } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="relative bg-lightBlue-400 rounded-t pt-8 pb-6">
  <div class="container mx-auto md:px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-4/12 px-4">
      <div class="grid w-full grid-rows-3 gap-2 md:gap-4 px-4">
  <div>
    <h4 class="fonat-semibold text-blueGray-700 text-3xl">Let's keep in touch!</h4>
    <p class="text-gray-800">
      <strong>Sign up for my newsletter </strong> 
       to stay upto date with my content, news and special offers!
    </p>
  </div>
  <div class="">
          <form class="w-full text-blueGray-600">
            <label for="email" class="sr-only"> Email </label>

            <div class="border rounded border-black/10 hover:border-black/50 focus:border-black p-2 sm:flex sm:items-center">
              <input
                class="h-6 w-full border-none bg-transparent text-sm font-medium tracking-widest focus:text-blueGray-800 focus:font-bold"
                type="email"
                id="email"
                placeholder="Enter your email"
              />

              <button
                class="mt-1 h-6 w-full px-2 py-0.5 text-blueGray-800 font-bold text-xs transition duration-500 ease-in-out rounded-full bg-blue-200 md:bg-transparent hover:bg-blue-600 hover:text-xs hover:text-white hover:shadow-md tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

  <div class="">
    <a href="https://www.twitter.com/ddmasterdon" target="_blank">
      <button class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
      {/* <a target="_blank" href="https://twitter.com" className="mx-2 h-12 w-12 align-center items-center justify-center rounded-full bg-white shadow-lg outline-none">
                              <svg className="w-10 h-10 fill-current  dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"/>
                              </svg>
                          </a> */}
        <FontAwesomeIcon icon={faTwitter} className='fa-brands fa-twitter text-[1.75rem] text-blue-500'/>
      </button>
    </a>
    <a href="https://github.com/TheDemonicCoder" target="_blank">
      <button class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faGithub} className='fa-brands fa-github text-[1.75rem] text-gray-900'/>
      </button>
    </a>
    <a href="https://codepen.io/ddmasterdon" target="_blank">
      <button class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faCodepen} className='fa-brands fa-codepen text-[1.75rem] text-purple-700'/>
      </button>
    </a>
    <a href="https://www.youtube.com" target="_blank">
      <button class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faYoutube} className='fa-brands fa-youtube text-[1.75rem] text-red-500'/>
      </button>
    </a>
  </div>
</div>
      </div>
      <div class="w-full lg:w-2/12">

      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-800 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Home</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/podcast">Podcast</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-800 text-sm font-semibold mb-2">Others</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/License">MIT License</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/T&C">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/Privacy Policy">Privacy Policy</a>
              </li>
              <li>
                <a class="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer