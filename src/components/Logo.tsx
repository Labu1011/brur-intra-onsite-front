"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Logo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Image
        src={"/cp-club-logo.png"}
        alt="cp-club logo"
        height={150}
        width={249}
        className="mx-auto"
      />
    </motion.div>
  )
}
