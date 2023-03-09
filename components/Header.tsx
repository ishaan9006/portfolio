import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({}: Props) {
    return(
        <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-50">
            {/* Icons */}
                <div className="flex flex-row items-center px-3">
                <SocialIcon
                    className='cursor-pointer mx-2' 
                    url="https://linkedin.com/in/jaketrent"
                    fgColor='transparent' 
                    bgColor='gray'
                />
                <SocialIcon
                    className='cursor-pointer mx-2' 
                    url="https://twitter.com/in/jaketrent"
                    fgColor='transparent'  
                    bgColor='gray'
                />

                </div>
            {/*Email icon*/}
            <div className='flex flex-row items-center px-3'>
                <SocialIcon
                    className='cursor-pointer mx-2' 
                    network='email'
                    fgColor='transparent' 
                    bgColor='gray'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold'>Get In Touch</p>
            </div>

        </header>
    )
}