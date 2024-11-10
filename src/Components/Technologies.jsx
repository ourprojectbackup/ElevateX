import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa6';
import { DiPostgresql, DiMsqlServer } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiDotnet, SiVite, SiPostman, SiMongodb } from 'react-icons/si';
import { motion } from "framer-motion"

const animate = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: { duration: duration, ease: "linear", repeat:Infinity, repeatType:"reverse"}
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2 initial={{opacity:0,y:-100}}  whileInView ={{opacity:1,y:0}} transition={{duration:1.5}} className='my-20 text-4xl text-center'>Technologies</motion.h2>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={animate(2.5)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <RiReactjsLine className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div  variants={animate(6)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <SiVite className='text-7xl text-purple-400' />
                </motion.div>
                <motion.div  variants={animate(5)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div  variants={animate(3)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <DiPostgresql className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div  variants={animate(6.5)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <DiMsqlServer className='text-7xl text-red-600' />
                </motion.div>
                <motion.div  variants={animate(4)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>
                <motion.div  variants={animate(5.5)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <SiPostman className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div  variants={animate(3)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <SiDotnet className='text-7xl text-indigo-600' />
                </motion.div>
                <motion.div  variants={animate(6.5)} initial="initial" animate="animate"  className="border-4 border-neutral-800 p-4 rounded-2xl">
                    <TbBrandReactNative className='text-7xl text-cyan-400' />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
