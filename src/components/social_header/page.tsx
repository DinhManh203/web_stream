"use client"

import React from 'react';
import {
    FacebookOutlined,
    Instagram,
    Twitter,
    LinkedIn,
    YouTube,
} from "@mui/icons-material"
import Link from 'next/link';


const page = () => {
    return (
        <div className='container mx-auto bg-[#091022]'>
            <div className='flex justify-between items-center'>
                {/* left  */}
                <div className='flex gap-8 text-white'>
                    <Link href="/">Member</Link>
                    <Link href="/">Press</Link>
                </div>

                {/* right */}
                <div className='flex gap-8 text-white cursor-pointer'>
                    <FacebookOutlined fontSize='small' />
                    <FacebookOutlined fontSize='small' />
                    <Instagram fontSize='small' />
                    <Twitter fontSize='small' />
                    <LinkedIn fontSize='small' />
                    <YouTube fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default page