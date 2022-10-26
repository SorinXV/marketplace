import { useRouter } from 'next/router'

import React from 'react'

 const Details = () => {
    const router = useRouter()
    const { cardName } = router.query
    
    return (
      <>
      <p>Placeholder page to showcase dynamic routing change</p>
    <h1 className='font-bold'> dynamic element :{cardName}</h1>
  </>
  )
}

export default Details;