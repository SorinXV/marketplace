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
  