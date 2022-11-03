import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardsLayout from '../components/CardsLayout'
import useSWR from 'swr'



export default  function explore({items}) {
  ` `
  return (
    <>          
    yo`
             <CardsLayout />
    </>
  )
}



// export async function getStaticProps(){
//   const resAll =  await fetch(`${server}/items.json`)
//   const dataAll = await resAll.json();
//   let items = []
//    for(let res of dataAll) {
//      let resOne = await fetch(`${server}/${res}.json`);
//      let data = await resOne.json()
//      items.push(data)
//    }
//    return {
//       props : {items : items}
//    }
//   }
  