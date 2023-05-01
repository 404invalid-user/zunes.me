import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Software.module.css";

export default function Software() {
  return (
    <>
      <Nav />
      <div class="mainContentWrap">
        <div
          className={styles.hero}
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "calc(100% - 40px)",
            background: "rgb(22, 22, 22)",
            top: 0,
            zIndex: -1,
            padding: "20px 20px 62px",
          }}
        >
          <div style={{ width: "120%" }}>
            <h1
              style={{
                fontWeight: 400,
                fontFamily: "Zegoe Light",
                fontSize: 48,
                margin: 0,
                padding: 0,
                color: "rgb(255, 255, 255)",
              }}
            >
              download zune software
            </h1>
          </div>
          <div style={{ width: "40%", padding: "73px 0" }}>
            <h2
              style={{
                textAlign: "left",
                fontSize: 35,
                letterSpacing: "-1.6px",
                lineHeight: "37px",
              }}
            >
              browse music, not spreadsheets
            </h2>
            <p style={{ color: "rgb(255, 255, 255)", fontSize: 14 }}>
              Zune 4.0 software has new features to help you discover more
              entertainment to enjoy anytime anywhere.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://1drv.ms/u/s!AmxHvJnifOoIjIIhT-v61b3qYtrUBA?e=U48NiM"
                className={styles.button}
              >
                download now
              </a>
              <a
                href="https://onedrive.live.com/?id=8EA7CE299BC476C%21199112"
                className={styles.button}
              >
                download older version
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <div style={{ width: "50%", paddingRight: "10px" }}>
            <p className={styles.header}>System recommendations</p>
            <p className={styles.text}>
              To get the most out of Zune Music + Video, your computer should
              meet system requirements:
              <ul>
                <li>
                  A 1 gigahertz (GHz) or faster 32-bit (x86) or 64-bit (x64)
                  processor
                </li>
                <li>1 gigabyte (GB) RAM (32-bit) or 2 GB RAM (64-bit)</li>
                <li>Broadband Internet connection </li>
              </ul>
              A wi-fi network is necessary for you to wirelessly sync your Zune
              device to your computer. *The Zune software won't work on versions
              of Windows earlier than Windows XP SP3. Download Windows XP SP3.
              Zune Software License Terms
              <br />
              <br />
              <b>Installation:</b> If the Zune software will not install on your
              PC and you are using Windows Vista or Windows 7, see this
              Knowledge Base article.
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <p className={styles.header}>Privacy info</p>

            <p className={styles.text} style={{ color: "red" }}>
              Note: We are not Microsoft. This is just a copy for{" "}
              <i>aesthetics</i>.
            </p>
            <p className={styles.text}>
              Get started for free with the Zune software and set up a Zune
              Music + Video account to enjoy all the amazing Zune software
              features. Zune software is smart and we're always working to make
              it better. To do this, we need to learn a little about how it
              works for you. When you install the Zune software, information
              about your installation experience will be sent to Microsoft,
              including whether your installation was successful.
              <br />
              <br />
              Also, when you use Zune Marketplace, we use web analytics tools
              that automatically collect certain information about pages you
              view, links you click, and other actions you take. This will
              enable us to make customized recommendations, such as new music
              you may like and to build playlists for your tastes. We understand
              that your privacy is of great importance, so if you would like
              more information, please read our privacy statement. If you do not
              want us to collect this information, please do not use Zune
              Marketplace.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
