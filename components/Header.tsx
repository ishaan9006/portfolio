import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}

export default function Header({}: Props) {
    return(
        <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-50 py-3">
            {/* Icons */}
                <motion.div 
                className="flex flex-row items-center px-3"
                initial={{x: -500, opacity:0, scale: 0.5}}
                animate={{x: 0, opacity:1, scale: 1}}
                transition={{duration:1.5}}
                >
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

                </motion.div>
            {/*Email icon*/}
            <motion.div 
            className='flex flex-row items-center px-3'
            initial={{x: 500, opacity:0, scale: 0.5}}
            animate={{x: 0, opacity:1, scale: 1}}
            transition={{duration:1.5}}
            >
                <SocialIcon
                    className='cursor-pointer mx-2' 
                    network='email'
                    fgColor='transparent' 
                    bgColor='gray'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold'>Get In Touch</p>
            </motion.div>

        </header>
    )
}