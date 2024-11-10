import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion } from "framer-motion"

const Experience = () => {
    return (
        <div className='bordedr-b border-neutral-900 pb-4'>
            <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}}  transition={{duration:1}} className='my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
                {EXPERIENCES.map((exp, index) => (

                    <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                        <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}}  transition={{duration:1}}  className="w-full lg:w-1/4">
                            <p className='text-sm text-neutral-400 mb-2'>{exp.year}</p>
                        </motion.div>

                        <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1}}    className="w-full max-w-xl lg:w-3/4">
                            <h2 className='mb-2 font-semibold'>
                                {exp.role} - <span className='text-sm text-purple-100'>
                                    {exp.company}
                                </span>
                            </h2>
                            <p className='text-neutral-400 mb-4'>
                                {exp.description}
                            </p>
                            {exp.technologies.map((tech, index) => (
                                <span className='mr-2 rounded mt-5 px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900' key={index}>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience