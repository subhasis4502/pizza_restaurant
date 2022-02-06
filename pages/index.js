import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Kolkata</title>
        <meta name="description" content="Delicios pizza one order away..." />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://restaurant-subhasis4502.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
