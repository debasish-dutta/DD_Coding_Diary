import React from 'react'

const BottomFooter = () => {
  return (
    <footer className="bg-lightBlue-400 text-center rounded lg:text-left">
        <div className="text-gray-700 text-center p-4">
      <hr class="my-2 mx-auto w-9/12 h-px bg-gray-100 rounded border-0 md:my-1 dark:bg-gray-700"></hr>
        © 2022 Made with <span className='text-red-500'> &hearts;  </span> 
            {/* <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a> */}
        </div>
    </footer>
  )
}

export default BottomFooter