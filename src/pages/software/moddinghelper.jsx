import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Software.module.css";

export default function ZuneModdingHelper() {
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
              download zune modding helper
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
            A nifty tool that helps you easily apply mods to the Zune software made by the community.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://github.com/ZuneDev/ZuneModdingHelper/releases/download/2021.11.14.0-alpha/ZuneModdingHelper_2021.11.14.0-alpha_x64.zip"
                className="button"
              >
                download now
              </a>
              <a
                href="https://github.com/ZuneDev/ZuneModdingHelper/releases"
                className={styles.button}
              >
                download other version(s)
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <div style={{ width: "50%", paddingRight: "10px" }}>
            <p  className={styles.header}>System recommendations</p>
            <p className={styles.text}>
              To get the most out of Zune Modding Helper, your computer should
              meet system requirements:
              <ul>
                <li>
                  A 1 gigahertz (GHz) or faster 32-bit (x86) or 64-bit (x64)
                  processor
                </li>
                <li>1 gigabyte (GB) RAM (32-bit) or 2 GB RAM (64-bit)</li>
                <li>Broadband Internet connection </li>
              </ul>
              A wi-fi network is necessary for you to download updates and connect to our community servers. *The Zune software won&apos;t work on versions
              of Windows earlier than Windows XP SP3. Download Windows XP SP3.
           
              <br />
              <br />
              <b>Installation:</b> If the Zune software will not install on your
              PC and you are using Windows Vista or Windows 7, see this
              Knowledge Base article.
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <p className={styles.header}> Software License Terms</p>

            <p className={styles.text} style={{ color: "red" }}>
              Note: We are not Microsoft.
            </p>
            <p className={styles.text}>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
