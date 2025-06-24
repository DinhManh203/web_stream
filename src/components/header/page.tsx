import React from 'react'
import Navbar from "@/components/navbar/page"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex justify-between mx-auto container py-6 gap-8'>
            <div>
                <Link href="/" className='text-2xl text-black'>
                    <Image
                        src="/Logo.png"
                        alt="Logo Image"
                        width={100}
                        height={50}
                    />
                </Link>
            </div>
            <div className='flex gap-8'>
                <Navbar />
                <div>
                    <Button variant="buttonborder" className='bg-black'>Dowload</Button>

                </div>
            </div>
        </div>
    )
}

export default page