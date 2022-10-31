import React from 'react'
import Card from './Card'

export default function CardsLayout({ details }) {

    return (
        <div className='cards__container | grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] gap-6 mx-auto mt-5 '>
            {
                details.map((e) => {
                    return (
                        <Card
                            title={e.title}
                            description={e.description}
                            img={e.imageUrl}
                            retailer_name = {e.retailer_name}
                            retailer_contact = {e.retailer_name}
                            key={e.title}
                        />
                    )
                })
            }
        </div>
    );
}
