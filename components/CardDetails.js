import React from 'react';
import CardModal from './CardModal';
import Image from 'next/image';

export default function CardDetails(props) {
  let details = props.details
  
    return (
    <>
    <div className='flex w-[80%] mx-auto gap-5 mt-5'>
    <article className='card | flex flex-col gap-2  justify-center items-center'>
<div className='card-top | '>
 <img className='w-full' src={details.imageUrl} alt='image'></img>
    </div>            
    <div className='card-body | flex gap-3 w-full justify-center items-center '>
<CardModal color="rgb(239 68 68)" text="Add now"/>
<CardModal color="rgb(34 197 94)" text="Buy now"/>
    </div>
</article>
<section className='flex  flex-col gap-4'>
    <p>{details.title}</p>
    <p>{details.description}</p>
</section>
</div>
</>
    )
}


