import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Guide.module.css";

function Hero() {
    return (
        <div className={`${styles.mainContentWrap} ${styles.herowrap}`}>
            <div className={`${styles.hero}`}>
                <div className={`${styles.infowrap}`}>
                    <h1 className={`${styles.title}`}>
                        Updating your Zune&apos;s Firmware Guide
                    </h1>
                    <div className={`${styles.indexlist}`}></div>
                    <iframe src="https://www.youtube.com/embed/NvZBEbadefU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={`${styles.textwrap}`}>
                    <p className={`${styles.description}`}>
                        This guide will show you how to update your zunes firmware using
                        community servers.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function GetStartedGuide() {
    return (
        <>
            <Head>
                <title>Updating your Zune&apos;s Firmware Guide | Zunes.me</title>

                <link rel="icon" type="image/svg+xml" href="/icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta
                    name="description"
                    content="This guide will show you how to update your zunes firmware using community servers."
                />
                <meta
                    property="og:title"
                    content="Updating your Zune's Firmware Guide | Zunes.me"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.zunes.me/guides/updating-zunes-firmware"
                />
                <meta property="og:image" content="https://zunes.me/logo.png" />
                <meta
                    property="og:description"
                    content="This guide will show you how to update your zunes firmware using community servers."
                />
                <meta property="og:site_name" content="Zunes.me" />
            </Head>
            <Nav selected="guides" />
            <Hero />

            <div
                className={`${styles.mainContentWrap}`}
                style={{ marginTop: "48px" }}
            >
                <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                    <div>
                        <p className={`${styles.text}`}>
                            There are a couple of ways to do this. This guide will show you
                            the easier method of using zuneupdate.com. The other methods
                            include using an Abyss webserver. There are plenty of guides on
                            that, and you can find one pretty easily.
                        </p>
                        <p className={`${styles.text}`}>
                            The first thing you want to do is open the files. Then, in the
                            path bar, copy and paste
                            <span className={`${styles.code}`}>
                                %SystemRoot%\System32\drivers\etc
                            </span>
                            and click enter. Now locate the file called <span className={`${styles.code}`}>hosts</span>. You will need
                            to copy this file to somewhere like your desktop so you can then
                            save the changes you make.
                        </p>
                        <p className={`${styles.text}`}>
                            After that, open the file in Notepad and add this to the bottom of
                            the file:
                            <br />
                            <span className={`${styles.codeBlock}`}>
                                66.115.173.227 resources.zune.net
                            </span>
                            <br />
                            If you are having trouble with that, you can try this in that
                            file:
                            <br />
                            <span className={`${styles.codeBlock}`}>
                                66.115.173.227 resources.zunes.me
                            </span>
                            <br />
                            Now save that file and move it back to the original location.
                            Click continue, and now you are all done. Plugin your Zune and
                            click accept to update it.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
