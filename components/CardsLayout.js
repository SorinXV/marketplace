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
                            key={e.title}
                        />
                    )
                })
            }
        </div>
    );
}
