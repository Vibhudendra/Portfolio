import { RiReactjsLine } from "react-icons/ri"
import { TbBrandTypescript } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { RiTailwindCssLine } from "react-icons/ri"
import { RiHtml5Fill } from "react-icons/ri"
import {  motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            easeIn: "linear",
            repeat: Infinity,
            reapeatType: "reverse",
        },
    },
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}} 
        transition={{duration: 0.5}}
        className=" my-10 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}} 
        transition={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandTypescript className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-blue-300"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech