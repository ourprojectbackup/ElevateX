import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className='border-b pb-20 border-neutral-900'>
      <motion.h2 initial={{ y: -100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className='text-center text-4xl my-10'>Get in Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='my-4'>{CONTACT.address}</motion.p>
        <motion.p initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='my-4'>{CONTACT.phoneNo}</motion.p>
        <motion.a initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2.7 }} href="#" className='border-b'>{CONTACT.email}</motion.a>
      </div>
    </div>
  )
}

export default Contact