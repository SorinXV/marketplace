import { useRouter } from 'next/router'
import CardDetails from '../../components/CardDetails'
import React from 'react'
import {delay, motion as m} from 'framer-motion'
 const Details = ({cardDetails}) => {

return (

      <m.div
      className='w-[80%] mx-auto'
      initial={{opaity:0 , x:-100 + 'vh'}}
      animate={{opacity:1 ,x : 0 }}
      transition={{delay:1}}
      >
      
<CardDetails details={cardDetails}/>
  </m.div>
  )
}

export default Details;

export async function getServerSideProps({params}) {
  
  const res = await fetch('http://localhost:3000/api/cardIndex')
  const data = await res.json()
  let filered_data = [];
    for(let i of data){
        if(i.title == params.item)
         filered_data.push(i)
    }
console.log(filered_data[0])  
  return { props: { cardDetails: filered_data } }
}


