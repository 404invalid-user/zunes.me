import Head from 'next/head'
import Image from 'next/image'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <>
     <Head>
        <title>Zune Community | Zunes.me</title>

        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Welcome to the social!"
        />
        <meta property="og:title" content="Zune Community | Zunes.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zunes.me/guides/get-started"
        />
        <meta property="og:image" content="https://zunes.me/logo.png" />
        <meta
          property="og:description"
          content="Welcome to the social!"
        />
        <meta property="og:site_name" content="Zunes.me" />
      </Head>
      <Nav selected={null} />
      <div className={`alignCenter`}>
        <h2>your entertainment, everywhere</h2>
      </div>
      <div className={`subheader`}>
        <p className={`alignCenter`}>
          Zune Music&nbsp;+&nbsp;Video brings entertainment anywhere you are, in
          exciting new ways.{" "}
        </p>
      </div>

      <div id="heroCanvas" className={`${styles.heroCanvas}`}>
        <div id="loading" className={`${styles.loading}`}></div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "410px",
          left: "0",
          background: "linear-gradient(to bottom, #ccc, #FFFFFF)",
          height: "113px",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          zIndex: "-1",
          filter: "blur(10px)",
        }}
      />
      <div className={`mainContentWrap`}>
        <div className={`${styles.getStarted}`}>
          <div
            style={{
              display: "inline-flex",
              width: "240px",
              fontSize: "12px",
              color: "#fff",
              marginLeft: "10px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            get started with zune
          </div>
          <Link className={`${styles.btn} ${styles.first}`} href="/software">
            <span>1</span> Get the Zune software
          </Link>
          <Link className={`${styles.btn}`} href="/software/moddinghelper">
            <span>2</span> Get the modding helper
          </Link>
          <Link className={`${styles.btn}`} href="/guides/updating-zunes-firmware">
            <span>3</span> Update your Zune 
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
