"use client"

import React, { useContext } from "react"
import FeaturedProducts from "@modules/home/components/featured-products"
import Head from "next/head"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
import { motion } from "framer-motion";
import { metadata } from "./metadata";
import { CursorContext } from "@lib/context/cursor-context";

const Home = () => {
  const contextValue = useContext(CursorContext);

  if (!contextValue) {
    throw new Error("CursorContext value is null. Are you within a CursorProvider?");
  }

  const { cursorVariants, cursorBg } = contextValue;


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description || ''} />
      </Head>
      <div className="pb-0 sm:pb-40 md:pb-72 lg:pb-0">
        <Hero />
      </div>
      <div className="h-full mx-full relative mt-0 sm:pt-20 lg:mt-30 xl:mt-0 z-10">
        <FeaturedProducts />
      </div>
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[32px] h-[32px] rounded-full fixed top-0 left-0 pointer-events-none z-50">
      </motion.div>

    </>
  )
}

export default Home
