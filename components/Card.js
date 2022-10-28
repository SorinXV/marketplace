import React , {useState} from 'react'
import Link from 'next/link';





export default function Card({ title, description, img , retailer_name , retailer_contact}) {
    const [pagination , setPagination] = useState(1);



    const Breif =()=> {
        return(
        <>
        <div className='card__title | mt-6'>
        <h1>{title}</h1>
    </div>
    <div className='card__descritpion | max-w-[40ch]'>
        {description.slice(0 , 90)}
    </div>
    <Link href={`items/${title}?cardName=${title}`}>
    <button className='card__btn | px-4 py-1 bg-green-500 text-white rounded border-none self-end hover:opacity-70'>
        see more
    </button>
    </Link>
    </>
        )
    }
        const RetailerInfo =()=> {
         return(
         <>
            <div className='card__title | px-4 py-1 mt-6'>
            <h1>Name : {retailer_name}</h1>
        </div>
        <div className=' px-4 py-1 rounded border-none mb-16'>
       Retailer contact : {retailer_contact}
        </div>
        </>
         )
        }
            
    let render = null;
    switch (pagination) {
        case 1:
            render = <Breif/>
            break;
    case 2:
            render = <RetailerInfo/>
            break;
    }
  
    const handleChange =(e, val) =>{
setPagination(val);
 
 document.querySelector('.paginations').childNodes.forEach((e)=>{
e.classList.toggle("bg-red-600")
e.classList.toggle("bg-gray-600")
 } )

    }

const item = <Breif/>
    return (
        <div className='card | shadow-md'>
            <div className='card__image'>
                <img className='w-full' src={img}></img>
            </div>
            <div className='card__body| flex flex-col gap-6 justify-center items-start p-2'>
                
{render}
                <div className='paginations | flex w-full justify-center items-center gap-3'>
                    <section className='pagination | w-2 h-2 bg-red-600 rounded-full hover:opacity-70' onClick={(e)=> handleChange(e , 1)}></section>
                    <section className='pagination | w-2 h-2 bg-gray-600 rounded-full hover:opacity-70' onClick={(e) =>handleChange(e , 2)}></section>
                </div>
            </div>
        </div>
    )
}
