import React from 'react'
import Card from './Card'
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default   function CardsLayout() { 
    const { data, error } = useSWR('/api/staticData', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    let items = JSON.parse(data)
    return (
        <div className='cards__container | grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] gap-6 mx-auto mt-5'>
            {
                    items.map((e) => {
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

