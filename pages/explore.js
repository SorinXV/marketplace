import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import CardsLayout from '../components/CardsLayout'





export default  function explore({items}) {

 return (
    <>          
             <CardsLayout details={items}/>
    </>
  )
}



export async function getStaticProps(){
  const resAll =  await fetch('http://localhost:3000/items.json')
  const dataAll = await resAll.json();
  let items = []
   for(let res of dataAll) {
     let resOne = await fetch(`http://localhost:3000/${res}.json`);
     let data = await resOne.json()
     items.push(data)
   }
   return {
      props : {items : items}
   }
  }
  
export default function explore({ cardDetails }) {
  let cardDetails = fetchdata ();
  return (
   <>
    <center>
      <h1 className='title mt-12'>Explore</h1>
      <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
      <p>we'll also have the sort thing somewhere, hopefully</p>
    </center>
      <CardsLayout details={cardDetails} />
      
    </>
  )
}
async function fetchdata() {
  const res = await fetch('http://localhost:3000/api/cardIndex')
  const data = await res.json()

  return data
}
