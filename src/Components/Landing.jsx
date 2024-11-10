import React from 'react'
import { HERO_CONTENT } from "../constants/index"
import profilepic from "../assets/akshay.jpg"
import { motion } from "framer-motion"

const animate = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } }
})

const Landing = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className=" flex flex-col items-center lg:items-start">
                        <motion.h1 variants={animate(0)} initial="hidden" animate="visible" className='pb-16 text-6xl tracking-tight font-thin lg:text-8xl lg:mt-16'> Elevate X</motion.h1>
                        <motion.span variants={animate(0.5)} initial="hidden" animate="visible" className='text-3xl tracking-tight text-transparent  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text'>Full Stack Developer </motion.span>
                        <motion.p  variants={animate(1)} initial="hidden" animate="visible" className='my-2 py-6 font-light tracking-tighter max-w-xl'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-8 '>
                    <div className="flex justify-center">
                        <motion.img initial={{x:100, opacity:0}}  animate={{opacity:1,x:0}} transition={{duration:1,delay:1.2}} src={profilepic} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing