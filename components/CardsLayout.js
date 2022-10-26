import React from 'react'
import Card from './Card'

export default function CardsLayout({ details }) {

    return (
        <div className='cards__container | grid grid-cols-3 w-[60%] gap-6 mx-auto '>
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
