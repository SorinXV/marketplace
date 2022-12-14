import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
    <center>
    <div className='g-background h-screen pt-[27vh]'>
    <h1 className="m-2 text-white font-black h1-title-home ">Market
    <span className="font-black h1-title-home g-text">Place</span>
    </h1>
    <h2 className="m-2 text-white font-black h1-title-home ">A  <span className="font-black g-text h1-title-home">Place</span> to buy and sell stuff.</h2>
    <Link href="/explore">
    <button type="button" class="h2-title mt-[2vh] font-black text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-extrabold rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">Explore</button>
    </Link> 
    </div>
    </center>

    </>
  )
}
