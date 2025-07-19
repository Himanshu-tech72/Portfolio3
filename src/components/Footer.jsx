import React from 'react'
import { motion } from "motion/react"

function Footer() {
  return (
     <motion.footer
      id="contact"
      className="p-4 text-center bg-black mt-8 border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
       <p>Phone No.: 91+ 8305237323</p> 
       <p>Email: himanshudubey0505@gmail.com</p>
      <p className="mt-119">&copy; {new Date().getFullYear()} Himanshu. All rights reserved.</p>
    </motion.footer>
  )
}

export default Footer