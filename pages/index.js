import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardsLayout from "../components/CardsLayout";
export default function Home({ cardDetails }) {
  return <>
    <CardsLayout details={cardDetails} />
  </>;
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/cardIndex')
  const data = await res.json();

  return { props: { cardDetails: data } }
}

