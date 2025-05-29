import React from 'react'
import Navbar from "@/components/navbar/page"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-between mx-auto container py-2 gap-8'>
        <div>
            <Link href="/" className='text-2xl text-black'>
                Stream<span>.</span>
            </Link>
        </div>
        <div className='flex gap-8'>
            <Navbar />
        </div>
        <div>
            <Button>Dowload</Button>
        </div>
    </div>
  )
}

export default page