import React from 'react'
import Link from 'next/link'

const links = () => [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const page = () => {
    return (
    <>
      {
        links().map((link, index) => {
          return (
            <div key={index} className='flex items-center gap-8'>
              <Link
               href={link.href}
               className={`capitalize text-lg font-normal text-black transition-colors duration-300 hover:text-slate-400`}>
                {link.name}
              </Link>
            </div>
          )
        })
      }
    </>
    )
}

export default page