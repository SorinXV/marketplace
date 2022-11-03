import React from 'react';
import CardModal from './CardModal';
import { useRouter } from 'next/router';
export default function CardDetails({details}) {
  const router = useRouter()
 let filteredArray = details.filter((e)=> (e.title === router.query.item))  
 return (
    <>
    <div className='flex w-[80%] mx-auto gap-5 mt-5'>
    <article className='card | flex flex-col gap-2  justify-center items-center'>
<div className='card-top | '>
 <img className='w-full' src={filteredArray[0].imageUrl} alt='image'></img>
    </div>            
    <div className='card-body | flex gap-3 w-full justify-center items-center '>
<CardModal color="rgb(239 68 68)" text="Add now"/>
<CardModal color="rgb(34 197 94)" text="Buy now"/>
    </div>
</article>
<section className='flex  flex-col gap-4'>
    <p>{filteredArray[0].title}</p>
    <p>{filteredArray[0].description}</p>
</section>
</div>
</>
    )
}


