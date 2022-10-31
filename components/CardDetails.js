import React from 'react';
import CardModal from './CardModal';

export default function CardDetails(props) {
  const {title , imageUrl , description} = props.details[0]
  return (
    <>
    <div className='flex w-[80%] mx-auto gap-5 mt-5'>
    <article className='card | flex flex-col gap-2  justify-center items-center'>
<div className='card-top | '>
 <Image className='w-full' src={imageUrl}></Image>
    </div>            
    <div className='card-body | flex gap-3 w-full justify-center items-center '>
<CardModal color="rgb(239 68 68)" text="Add now"/>
<CardModal color="rgb(34 197 94)" text="Buy now"/>
    </div>
</article>
<section className='flex  flex-col gap-4'>
    <p>{title}</p>
    <p>{description}</p>
</section>
</div>
</>
    )
}


