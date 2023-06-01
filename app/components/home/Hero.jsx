import React from 'react'
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-10">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className=" mt-16 mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">From Novice to <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-primary-300 to-primary-800'>Developer</span></h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Follow my journey as I explore the world of programming</p>
    </div>
</section>
  )
}

export default Hero