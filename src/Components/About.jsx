import React from 'react'
import aboutpic from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants/index"
import { motion } from "framer-motion"


const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='text-4xl my-20 text-center'>About
                <span className='text-neutral-500'> ME</span>
            </h2>
            <motion.div className="flex flex-wrap">
                <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:1}} transition={{duration:0.9}}  className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={aboutpic} alt="About Me"></img>
                    </div>
                </motion.div>
                <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:1}} transition={{duration:0.9}}  className='w-full lg:w-1/2'>
                    <div className="flex justify-center lg:justify-start" >
                        <p className='my-2 max-w-xl py-6'> {ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default About