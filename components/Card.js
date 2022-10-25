import React from 'react'

export default function Card({ title, description, img }) {
    return (
        <div className='card | shadow-md'>
            <div className='card__image'>
                <img className='w-full' src={img}></img>
            </div>
            <div className='card__body| flex flex-col gap-6 justify-center items-start p-2'>
                <div className='card__title | mt-6'>
                    <h1>{title}</h1>
                </div>
                <div className='card__descritpion | max-w-[40ch]'>
                    {description}
                </div>
                <button className='card__btn | px-4 py-1 bg-green-500 text-white rounded border-none self-end hover:opacity-70'>
                    see more
                </button>
                <div className='paginations | flex w-full justify-center items-center gap-3'>
                    <section className='pagination | w-2 h-2 bg-black rounded-full'></section>
                    <section className='pagination | w-2 h-2 bg-gray-600 rounded-full'></section>
                    <section className='pagination | w-2 h-2 bg-gray-600 rounded-full'></section>
                </div>
            </div>
        </div>
    )
}
