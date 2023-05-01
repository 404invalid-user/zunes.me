import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Guide.module.css";

export default function GetStartedGuide() {
  return (
    <>
      <Head>
        <title>Get Started Guide | Zunes.me</title>

        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="So you got yourself a Zune eh? nice! this is your go to guide on helping you out."
        />
        <meta property="og:title" content="Get Started Guide | Zunes.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zunes.me/guides/get-started"
        />
        <meta property="og:image" content="https://zunes.me/logo.png" />
        <meta
          property="og:description"
          content="So you got yourself a Zune eh? nice! this is your go to guide on
              helping you out."
        />
        <meta property="og:site_name" content="Zunes.me" />
      </Head>
      <Nav selected="guides" />
      <div
        className={`${styles.mainContentWrap} ${styles.herowrap}  ${styles.smallHero}`}
      >
        <div className={`${styles.hero}`}>
          <div className={`${styles.infowrap}`}>
            <h1 className={`${styles.title}`}>Get Started Guide</h1>
            <div className={`${styles.indexlist}`}></div>
          </div>
          <div className={`${styles.textwrap}`}>
            <p className={`${styles.description}`}>
              So you got yourself a Zune eh? nice! this is your go to guide on
              helping you out.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.mainContentWrap}`}
        style={{ marginTop: "48px" }}
      >
        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <p className={`${styles.text}`}>
            Microsoft abandoned the Zune some time ago, hoping to sweep their $1
            billion failure under the rug. Although the community is still alive
            and well, the antiquated software and hardware can be difficult to
            use with modern machines. But we are here to help.
            <br />
            <br />
            Before I get to the basics, I&lsquo;ll start by mentioning that anything
            you may need can be downloaded from the archive you can find a link
            to in the navbar. It contains everything from the desktop software
            to games and applications. Its&lsquo; all there and is frequently updated.
            <br />
            <br />
            So, you&lsquo;re new here, and possibly to Zunes as a whole. Where do you
            start? First, head over to the{" "}
            <a className="link" href="/software" target="_blank">
              software
            </a>{" "}
            section and download the Zune software.
            <br />
            It&lsquo;s required to sync media files from your PC to any Zune device.
            It&lsquo;s compatible with Windows XP to Windows 11, though up-to-date
            versions of Win10 and 11 have occasionally been known to have issues
            with installation. We don&lsquo;t yet know what causes some people&lsquo;s
            machines to fail during installation.
            <br />
            <br />
            Anyways, you&lsquo;ve downloaded and installed the software. You&lsquo;re going
            to want to install the handy{" "}
            <a className="link" href="/software/moddinghelper" target="_blank">
              modding helper
            </a>{" "}
            that makes it as easy as one click to fix and restore functionality
            to the software.
            <br />
            <br />
            Now, you might be receiving an update error when you connect your
            Zune to your PC, indicating an out-of-date Zune. Prior to 2014, your
            PC would automatically download and install this firmware update to
            your Zune, but without MS&lsquo;s support, we&lsquo;re on our own. Thankfully,
            Reddit user u/kahuna900 has made our lives easier with{" "}
            <a className="link" href="//zuneupdate.com">
              ZuneUpdate.com
            </a>
            . This, in tandem with zunity&lsquo;s tutorial video or the written
            version{" "}
            <a
              className="link"
              href="/guides/updating-zunes-firmware"
              target="_blank"
            >
              here
            </a>{" "}
            , should get your Zune updated and working properly with the
            software.
            <br />
            The rest is pretty self explanatory. Add your media to your Zune
            library and set your sync options.{" "}
            <b>
              Be sure to back up any content already on the Zune before naming
              and pairing the device in the software.
            </b>
            <br />
            looking for some other guides on errors you might get or modding
            your zune? be sure to check the navbar for them our our{" "}
            <a className="link" href="/guides">
              Guides
            </a>
            page
          </p>
          <p>
            This guide is heavily based on{" "}
            <a
              className="link"
              href="https://www.reddit.com/r/Zune/comments/l6oc3t/new_to_zune_need_a_refresher_please_start_here/"
            >
              this Reddit post
            </a>{" "}
            by Zunity
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
