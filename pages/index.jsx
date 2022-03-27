import Head from "next/head";
import styles from "./index.module.sass";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import axios from "axios";

export default function App(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  return (
    <>
      {/* Website Head Paet And Meta Tags Container */}
      <Head>
        <title>Moustapha's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Actual Page Components Wrapper Area */}
      <main id="app-main" className={styles.container}>
        <div className="row g-0">
          <div className="offset-1 col-10">
            <Navbar data={props.sections} />
            {/* <Hero /> */}
            {/* <About /> */}
            {/* <Education /> */}
            {/* <Portfolio /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/data");
  return {
    props: res.data,
  };
}
