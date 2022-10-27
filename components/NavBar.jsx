import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const pages = [
    {id: 1 , name: 'Blogs', slug: 'blog'},
    {id: 2, name: 'Podcasts', slug: 'podcast'},
    {id: 3, name: 'About Me', slug: 'about'},
    {id: 4, name: 'Contact Me', slug: 'contact'},
]

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    // pages.map((pg) => console.log(pg.name));
  return (
    <nav className=' rounded bg-slate-400'>
        <div className=' flex flex-wrap justify-between items-center w-ful'>
            <Link href='/'>
                <div className=' flex items-center '>
                    {/* <Image height={6} width={6} src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="DD Logo" /> */}
                    <svg className="mr-3 h-6 sm:h-9" viewBox="0 0 643 643" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="321.5" cy="321.5" r="319.5" fill="#D4F1FE" stroke="url(#paint0_radial_0_1)" strokeWidth="4"/>
                        <path d="M136.346 469.731C129.768 469.731 123.047 469.302 116.183 468.444C98.1649 466.156 84.8659 460.865 76.2859 452.571C67.9919 443.991 63.8449 434.839 63.8449 425.115C63.8449 414.533 68.4209 404.952 77.5729 396.372C87.0109 387.792 100.31 383.502 117.47 383.502C128.91 383.502 141.351 385.79 154.793 390.366C160.513 392.082 167.52 395.085 175.814 399.375C184.394 403.379 192.831 407.526 201.125 411.816C209.419 416.106 215.854 419.538 220.43 422.112C233.014 409.814 244.597 395.657 255.179 379.641C266.047 363.339 276.343 346.036 286.067 327.732C295.791 309.142 305.658 290.409 315.668 271.533C325.678 252.657 336.117 234.353 346.985 216.621C358.139 198.603 370.437 182.158 383.879 167.286C369.007 158.134 352.562 151.127 334.544 146.265C316.812 141.117 298.508 138.543 279.632 138.543C272.482 138.543 265.189 138.972 257.753 139.83C250.603 140.688 243.31 141.832 235.874 143.262C209.276 148.982 186.825 158.134 168.521 170.718C150.217 183.016 136.346 196.601 126.908 211.473C117.756 226.059 113.18 239.93 113.18 253.086C113.18 262.81 115.754 271.39 120.902 278.826C126.05 286.262 133.915 291.553 144.497 294.699C152.219 296.987 158.94 298.131 164.66 298.131C174.098 298.131 182.249 296.272 189.113 292.554C196.263 288.55 202.269 283.688 207.131 277.968C211.993 272.248 215.568 266.671 217.856 261.237C220.43 255.803 221.86 251.37 222.146 247.938C222.146 245.936 223.433 244.935 226.007 244.935C230.011 244.935 231.584 247.366 230.726 252.228C229.296 263.668 225.006 273.678 217.856 282.258C210.706 290.552 202.126 297.13 192.116 301.992C182.106 306.568 171.81 308.856 161.228 308.856C154.364 308.856 147.214 307.712 139.778 305.424C126.622 300.848 115.468 292.983 106.316 281.829C97.4499 270.389 93.0169 256.947 93.0169 241.503C93.0169 226.345 98.0219 211.187 108.032 196.029C118.328 180.585 134.63 166.714 156.938 154.416C179.246 142.118 208.418 133.395 244.454 128.247C256.466 126.531 268.621 125.673 280.919 125.673C301.225 125.673 321.102 128.104 340.55 132.966C360.284 137.828 378.874 144.835 396.32 153.987L407.045 141.546C409.619 139.258 413.194 136.398 417.77 132.966C422.632 129.534 427.494 126.245 432.356 123.099C437.218 119.953 440.793 117.951 443.081 117.093C446.799 115.663 449.802 114.948 452.09 114.948C453.806 114.948 454.664 115.377 454.664 116.235C454.664 118.237 452.376 120.668 447.8 123.528C444.94 125.53 442.366 127.818 440.078 130.392C437.79 132.68 436.074 134.539 434.93 135.969C430.64 141.975 427.208 146.837 424.634 150.555C422.346 154.273 419.2 159.135 415.196 165.141C441.508 182.587 462.958 205.181 479.546 232.923C496.134 260.379 504.428 291.839 504.428 327.303C504.428 334.739 503.999 342.318 503.141 350.04C501.425 368.344 496.42 384.932 488.126 399.804C479.832 414.676 468.964 427.26 455.522 437.556C442.366 447.852 427.637 455.717 411.335 461.151C395.319 466.871 378.445 469.731 360.713 469.731C354.135 469.731 347.557 469.302 340.979 468.444C312.951 465.012 289.785 460.436 271.481 454.716C253.463 449.282 237.59 443.562 223.862 437.556C197.836 459.006 168.664 469.731 136.346 469.731ZM353.42 456.861C376.3 456.861 396.463 451.999 413.909 442.275C431.641 432.265 445.941 419.252 456.809 403.236C467.677 387.22 474.112 369.917 476.114 351.327C476.972 344.463 477.401 337.599 477.401 330.735C477.401 299.561 470.68 271.247 457.238 245.793C444.082 220.053 426.636 198.46 404.9 181.014C392.316 200.748 379.303 221.626 365.861 243.648C352.705 265.67 339.406 287.549 325.964 309.285C312.522 330.735 299.366 350.612 286.496 368.916C273.912 387.22 262.043 402.378 250.889 414.39C248.887 416.106 246.313 418.68 243.167 422.112C240.307 425.258 237.304 427.832 234.158 429.834C247.6 435.84 262.901 441.274 280.061 446.136C297.221 450.998 317.384 454.43 340.55 456.432C343.124 456.718 345.269 456.861 346.985 456.861C348.987 456.861 351.132 456.861 353.42 456.861ZM126.908 456.432C142.638 457.29 157.367 455.431 171.095 450.855C184.823 445.993 197.55 439.272 209.276 430.692C198.98 425.83 188.541 420.825 177.959 415.677C167.377 410.243 156.223 405.381 144.497 401.091C136.775 398.517 129.911 397.23 123.905 397.23C113.323 397.23 105.315 400.233 99.8809 406.239C94.4469 411.959 91.7299 418.394 91.7299 425.544C91.7299 433.266 94.7329 440.273 100.739 446.565C106.745 452.571 115.468 455.86 126.908 456.432Z" fill="#00BBEF" fillOpacity="0.82"/>
                            <g filter="url(#filter0_i_0_1)">
                                <path d="M207.997 479.511C201.113 479.511 194.078 479.062 186.894 478.164C168.036 475.769 154.117 470.232 145.137 461.551C136.457 452.571 132.116 442.992 132.116 432.815C132.116 421.74 136.906 411.712 146.484 402.732C156.362 393.752 170.281 389.262 188.241 389.262C200.215 389.262 213.236 391.657 227.304 396.446C233.291 398.242 240.625 401.385 249.305 405.875C258.285 410.066 267.116 414.406 275.796 418.896C284.477 423.386 291.212 426.978 296.001 429.672C309.172 416.801 321.295 401.984 332.37 385.221C343.745 368.159 354.521 350.049 364.698 330.892C374.876 311.435 385.203 291.829 395.679 272.073C406.156 252.317 417.082 233.16 428.456 214.601C440.13 195.743 453.002 178.531 467.07 162.966C451.505 153.387 434.293 146.054 415.435 140.965C396.877 135.577 377.719 132.883 357.963 132.883C350.48 132.883 342.847 133.332 335.064 134.23C327.581 135.128 319.948 136.325 312.165 137.822C284.327 143.809 260.83 153.387 241.672 166.558C222.515 179.429 207.997 193.648 198.119 209.213C188.541 224.479 183.751 238.997 183.751 252.766C183.751 262.943 186.445 271.923 191.833 279.706C197.221 287.489 205.453 293.026 216.528 296.319C224.61 298.714 231.645 299.911 237.631 299.911C247.509 299.911 256.04 297.965 263.224 294.074C270.708 289.883 276.994 284.795 282.082 278.808C287.171 272.821 290.913 266.984 293.307 261.297C296.001 255.61 297.498 250.97 297.797 247.378C297.797 245.283 299.144 244.235 301.838 244.235C306.029 244.235 307.675 246.779 306.777 251.868C305.281 263.841 300.791 274.318 293.307 283.298C285.824 291.979 276.844 298.863 266.367 303.952C255.891 308.741 245.115 311.136 234.039 311.136C226.855 311.136 219.372 309.939 211.589 307.544C197.82 302.755 186.146 294.523 176.567 282.849C167.288 270.876 162.648 256.807 162.648 240.643C162.648 224.778 167.887 208.914 178.363 193.049C189.139 176.885 206.201 162.367 229.549 149.496C252.897 136.625 283.429 127.495 321.145 122.107C333.717 120.311 346.439 119.413 359.31 119.413C380.563 119.413 401.367 121.957 421.721 127.046C442.375 132.135 461.832 139.468 480.091 149.047L491.316 136.026C494.01 133.631 497.752 130.638 502.541 127.046C507.63 123.454 512.719 120.012 517.807 116.719C522.896 113.426 526.638 111.331 529.032 110.433C532.924 108.936 536.067 108.188 538.461 108.188C540.257 108.188 541.155 108.637 541.155 109.535C541.155 111.63 538.761 114.175 533.971 117.168C530.978 119.263 528.284 121.658 525.889 124.352C523.495 126.747 521.699 128.692 520.501 130.189C516.011 136.475 512.419 141.564 509.725 145.455C507.331 149.346 504.038 154.435 499.847 160.721C527.386 178.98 549.836 202.628 567.197 231.663C584.559 260.399 593.239 293.326 593.239 330.443C593.239 338.226 592.79 346.158 591.892 354.24C590.096 373.397 584.858 390.759 576.177 406.324C567.497 421.889 556.122 435.06 542.053 445.836C528.284 456.612 512.868 464.844 495.806 470.531C479.044 476.518 461.383 479.511 442.824 479.511C435.94 479.511 429.055 479.062 422.17 478.164C392.836 474.572 368.59 469.783 349.432 463.796C330.574 458.109 313.961 452.122 299.593 445.836C272.354 468.286 241.822 479.511 207.997 479.511ZM435.191 466.041C459.138 466.041 480.241 460.952 498.5 450.775C517.059 440.298 532.026 426.679 543.4 409.916C554.775 393.153 561.51 375.044 563.605 355.587C564.503 348.403 564.952 341.219 564.952 334.035C564.952 301.408 557.918 271.774 543.849 245.133C530.08 218.193 511.821 195.593 489.071 177.334C475.901 197.988 462.281 219.839 448.212 242.888C434.443 265.937 420.524 288.836 406.455 311.585C392.387 334.035 378.617 354.839 365.147 373.996C351.977 393.153 339.554 409.018 327.88 421.59C325.785 423.386 323.091 426.08 319.798 429.672C316.805 432.965 313.662 435.659 310.369 437.754C324.438 444.04 340.452 449.727 358.412 454.816C376.372 459.905 397.475 463.497 421.721 465.592C424.415 465.891 426.66 466.041 428.456 466.041C430.552 466.041 432.797 466.041 435.191 466.041ZM198.119 465.592C214.583 466.49 229.998 464.544 244.366 459.755C258.734 454.666 272.055 447.632 284.327 438.652C273.551 433.563 262.626 428.325 251.55 422.937C240.475 417.25 228.801 412.161 216.528 407.671C208.446 404.977 201.262 403.63 194.976 403.63C183.901 403.63 175.52 406.773 169.832 413.059C164.145 419.046 161.301 425.781 161.301 433.264C161.301 441.346 164.444 448.68 170.73 455.265C177.016 461.551 186.146 464.993 198.119 465.592Z" fill="#011987"/>
                            </g>
                        <defs>
                        <filter id="filter0_i_0_1" x="132.116" y="108.188" width="461.123" height="375.323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                        </filter>
                        <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(321.5 321.5) rotate(90) scale(319.5)">
                            <stop stopColor="#AB0B0B"/>
                            <stop offset="1" stopColor="#AB0B0B" stopOpacity="0"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    <span className='self-center cursor-pointer font-bold whitespace-nowrap text-2xl text-white'>
                        DD's Coding Diary
                    </span>
                </div>
            </Link>
            <button onClick={() => setNavbar(!navbar)} dataCollapseToggle="navbar" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
            </button>
            <div className={`md:block md:w-auto ${
                            navbar ? "block" : "hidden"
                        } id='navbar`}>
                {pages.map((page) => (
                    <Link key={page.id} href={`/${page.slug}`} className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ' >
                        <span className='block py-2 pr-4 pl-3 md:float-left mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {page.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default NavBar