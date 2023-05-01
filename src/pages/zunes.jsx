import React, { useState } from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Guide.module.css";
import ZuneStyles from "@/styles/Zunes.module.css";

import ZuneData from "@/data/zunes.json";
function ZuneImage({ src }) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    console.log("img erre");
    setImageSrc("/assets/img/ZuneShellResources_IMAGE.BUNNY.png");
  };

  return (
    <img
      src={`${imageSrc}?${new Date().getTime()}`}
      onError={handleImageError}
    />
  );
}

function Zune({ zune }) {
  return (
    <div className={ZuneStyles.zune} id={zune.id}>
      <div class={ZuneStyles.zuneQuickInfo}>
        <ZuneImage src={zune.img} />
        <div className="textwrap">
          <h2 className={ZuneStyles.zuneTitle}>
            {zune.name} ({zune.id})
          </h2>
          <p className={styles.text}>{zune.description}</p>
        </div>
      </div>

      <h3 className={ZuneStyles.zuneHeadder}>Guides</h3>
      <div>
        {zune.guides.map((guide) => (
          <a class="link" href={guide.link}>
            {guide.name}
          </a>
        ))}
      </div>

      <h3 className={ZuneStyles.zuneHeadder}>parts</h3>
      <div>
        {zune.parts.map((part) => (
          <a class="link" href={part.link}>
            {part.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className={`${styles.mainContentWrap} ${styles.herowrap}`}>
      <div className={`${styles.hero}`}>
        <div className={`${styles.infowrap}`}>
          <h1 className={`${styles.title}`}>Zunes</h1>
          <div className={`${styles.indexlist}`}>
            {ZuneData.map((zune) => (
              <a href={`/zunes#${zune.id}`} key={zune.id}>
                {zune.name} ({zune.id})
              </a>
            ))}
          </div>
          <ZuneImage src="/assets/img/zune-software-zune-30.png" />{" "}
        </div>
        <div className={`${styles.textwrap}`}>
          <h2 className={styles.sloganText}>your entertainment, everywhere</h2>
          <p className={`${styles.description}`}>
            A list of all (known) Zunes, along with accompanying information
            guides and assets to help you restore and use these devices.
          </p>
          <div className="buttons">
            <a href="/guide/get-started" className="button">
              getting started guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Zunes() {
  return (
    <>
      <Head>
        <title>Zunes | Zunes.me</title>

        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="A list of all (known) Zunes, along with accompanying information guides
                    and assets to help you restore and use these devices."
        />
        <meta property="og:title" content="Zunes | Zunes.me" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zunes.me/zunes" />
        <meta property="og:image" content="https://zunes.me/logo.png" />
        <meta
          property="og:description"
          content="A list of all (known) Zunes, along with accompanying information guides
                    and assets to help you restore and use these devices."
        />
        <meta property="og:site_name" content="Zunes.me" />
      </Head>
      <Nav selected="zunes" />
      <Hero />
      <div
        className={`${styles.mainContentWrap}`}
        style={{ marginTop: "48px" }}
      >
        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <div>
            {ZuneData.map((zune) => (
              <Zune zune={zune} key={zune.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
