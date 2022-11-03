import { useRouter } from 'next/router'
import CardDetails from '../../components/CardDetails'
import React from 'react'
import {motion as m} from 'framer-motion'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());
const Details = () => {
  const { data, error } = useSWR('/api/staticData', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const items = JSON.parse(data)

  return (

      <m.div
      className='w-[80%] mx-auto'
      initial={{opaity:0 , x:-100 + 'vh'}}
      animate={{opacity:1 ,x : 0 }}
      >
      
<CardDetails details={items}/>
  </m.div>
  )
}

  export default Details;

// export async function getStaticProps({params}) {
//   console.log(params)
//   const res = await fetch(`http://localhost:3000/${params.item}.json`)
//   const data = await res.json()
//   return { props: { cardDetails: data }, }
// }

// export async function getStaticPaths(){
  
//   const res = await fetch(`http://localhost:3000/items.json`)
//   const data = await res.json()
//   const paths  = data.map(e => {
//     return {params :  {item : e }}
//   })
//   return {
//     paths ,
//     fallback : false
//   };


