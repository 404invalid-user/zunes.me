import styles from '@/styles/Footer.module.css';


export default function Footer() {
  return (
    <footer className={`${styles.footerWrap}`}>
      <div className={`${styles.editorial}`}>
        <div
        className={`${styles.floatLeft} ${styles.col}`}>
          <ul>
            <li>
              <a
                href="https://github.com/zunedev/zunes.me"
                ect="1"
              >
                Contribute to website
              </a>
            </li>
            <li>
              <a
                href="mailto:help@zunes.me"
                target="_blank"
              >
               Contact
              </a>
            </li>
    
    

            <li>
              <a
                href="https://web.archive.org/web/20120501064931/http://www.microsoft.com/About/Legal/EN/US/IntellectualProperty/Trademarks/EN-US.aspx"
                target="_blank"
                ect="1"
              >
                Trademarks
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.floatLeft} ${styles.col}`}>
          <ul>
            <li>
              <a
                href="/newsletter"
              >
                Newsletter
              </a>
            </li>
            
            <li>
              <a
                href="https://zune.net/?source=zunes.me"
              >
                Link to Zune.net
              </a>
            </li>
            <li>Follow us on:</li>
            <li>
              <a
                href="https://discord.zunes.me"
                ect="1"
              >
                <img
                  alt="Image: Discord"
                  height="16"
                  src="/assets/img/icon/icon_clyde_blurple_RGB.png"
                  width="21"
                  style={{
                    marginRight:'3px'
                  }}
                />
              </a>
              <a
                href="https://zune.reddit.com/?source=zunes.me"
              >
                <img
                  alt="Image: Reddit"
                  height="16"
                  src="/assets/img/icon/reddit-logo.png"
                  width="15"
                  ect="1"

                />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.LastFooterCol} ${styles.col}`}>
          <ul>
            <li>Region/Language:</li>
            <li style={{whiteSpace: 'nowrap'}}>
              <strong>United States</strong> /{" "}
              <a
                href="#"
              >
                International
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.copyright}`}>©2012 Microsoft Corporation.  All Rights Reserved
</div>
    </footer>
  );
}
