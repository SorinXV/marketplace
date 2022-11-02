import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Home() {
  return (
    <>
          <div id="page-container" className="background-gradient">
            <div className="container">
              <center>
                <h1 className="big-title font-black text-white">
                  Market
                  <span className="text-emerald-300">Place</span>
                </h1>
                <h1 className="big-title font-black text-white">
                  A <span className="text-emerald-300">place</span> where you
                  can buy & sell shit
                </h1>
                <Link href="/explore">
                  <button
                    type="button"
                    class="mt-7 text-white font-medium rounded-lg secondary-title px-5 py-2.5 mr-2 mb-2 dark:bg-emerald-400 dark:hover:bg-emerald-500 dark:focus:bg-emerald-500 font-bold"
                  >
                    Explore
                  </button>
                </Link>
              </center>
            </div>
            
          </div>
        
      
    </>
  )
}
