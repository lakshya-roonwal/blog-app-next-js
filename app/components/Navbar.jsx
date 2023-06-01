"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
 return (
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex align-center">
        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">Lakshya Roonwal</span>
    </Link>

      <a href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Contact Me
            </a>
    </div>
</nav>
  )
}

export default Navbar