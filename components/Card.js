import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Card({
  title,
  description,
  img,
  retailer_name,
  retailer_contact,
}) {
  const [pagination, setPagination] = useState(1)

  const Breif = () => {
    return (
      <>
        <div className="card__title | mt-6">
          <h1>{title}</h1>
        </div>
        <div className="card__descritpion | max-w-[40ch]">
          {description.slice(0, 69)}
        </div>
        <Link href={`/items/${title}`}>
          <button className="card__btn | px-4 py-1 bg-green-500 text-white rounded border-none self-end hover:opacity-70">
            see more
          </button>
        </Link>
      </>
    )
  }
  const RetailerInfo = () => {
    return (
      <>
        <div className="card__title | px-4 py-1 mt-6">
          <h1>Name : {retailer_name}</h1>
        </div>
        <div className=" px-4 py-1 rounded border-none ">
          Retailer contact : {retailer_contact}
        </div>
        <Link href={`/items/${title}`}>
          <button className="card__btn | px-4 py-1 mt-2 bg-green-500 text-white rounded border-none self-end hover:opacity-70">
            see more
          </button>
        </Link>

      </>
    )
  }

  let render = null
  switch (pagination) {
    case 1:
      render = <Breif />
      break
    case 2:
      render = <RetailerInfo />
      break
  }

  const handleChange = (e, val) => {
    setPagination(val)

    document.querySelector('.paginations').childNodes.forEach((e) => {
      
    })
  }

  const item = <Breif />
  return (
    <div className="card | shadow-md hover:shadow-lg hover:scale-105 transition-all">
      <div className="card__image">
        <img className="w-full h-60 object-cover "
         src={img}
         layout="fill"></img>
      </div>
      <div className="card__body| flex flex-col gap-6 justify-center items-start p-2">
        {render}
        <div className="paginations | flex w-full justify-center items-center gap-3">
          <section
            className="pagination | w-2 h-2 bg-gray-600 rounded-full hover:opacity-70"
            onClick={(e) => handleChange(e, 1)}
          ></section>
          <section
            className="pagination | w-2 h-2 bg-gray-600 rounded-full hover:opacity-70"
            onClick={(e) => handleChange(e, 2)}
          ></section>
        </div>
      </div>
    </div>
  )
}
