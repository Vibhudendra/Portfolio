import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}} 
        className="my-10 text-center text-4xl">Get In Touch</motion.h2>
        <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.5}}  
        className="text-center tracking-tight">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-2">{CONTACT.phoneNo}</p>
            <a href="#" className="my-2 border-b">{CONTACT.email}</a>

        </motion.div>
        </div>
  )
}

export default Contact