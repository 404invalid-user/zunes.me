import React from 'react';
import '../assets/zune.css';

function Footer() {
    return (
        <div id="ctl00__shellFooter" className="XbcShellMainContent">
            <div style={{ width: 950, clear: "both", textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
                id="_foot">
                <div id="_footer">
                    <div className="FooterWrapper">
                        <div>
                            <div className="Editorial">
                                <div className="floatLeft col">
                                    <ul>
                                        <li>
                                            <a href="/en-US/press/default.htm">Press</a>
                                        </li>
                                        <li>
                                            <a href="/en-US/legal/privacy.htm" target="_blank">Privacy Statement</a>
                                        </li>
                                        <li>
                                            <a href="/en-US/legal/termsofservice.htm">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a href="/en-us/legal/safety.htm">Safety</a>
                                        </li>
                                        <li>
                                            <a href="/en-US/legal/codeOfConduct.htm">Code of Conduct</a>
                                        </li>
                                        <li>
                                            <a href="http://social.zunes.me/reportabuse">Report Abuse</a>
                                        </li>
                                        <li>
                                            <a href="http://www.microsoft.com/About/Legal/EN/US/IntellectualProperty/Trademarks/EN-US.aspx"
                                                target="_blank">Trademarks</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="floatLeft col">
                                    <ul>
                                        <li>
                                            <a href="http://discord.zunes.me/" target="_blank">Zune Discord</a>
                                        </li>
                                        <li>
                                            <a href="http://zunearchive.com/" target="_blank">Zune Archive</a>
                                        </li>
                                        <li>
                                            <a href="https://www.zuneupdate.com/" target="_blank">Zune Update</a>
                                        </li>
                                        <li>
                                            <a href="http://email.zunes.me/" target="_blank">Zunes.me Email</a>
                                        </li>
                                        <li>
                                            <a href="http://social.zunes.me/links/zunelinks.aspx">Link to Zune</a>
                                        </li>
                                        <li>
                                            <a href="http://www.zunerama.com/" target="_blank">Zunerama</a>
                                        </li>
                                        <li>Follow us on:</li>
                                        <li className='socials'>
                                            <a href="http://discord.zunes.me">
                                                <img alt="Image: Discord" height="16" src="/ico_discord.png" width="15" />
                                            </a>
                                            <a href="http://www.github.com/zunes">
                                                <img alt="Image: GitHub" height="16" src="/ico_github.png" width="15" />
                                            </a>
                                            <a href="http://www.reddit.com/r/zune">
                                                <img alt="Image: Reddit" height="16" src="/ico_reddit.webp" width="15" />
                                            </a>
                                            <a href="http://www.twitter.com/">
                                                <img alt="Image: Twitter" height="16" src="/ico_twitter.png" width="15" />
                                            </a>
                                            <a href="https://www.youtube.com/Zunity">
                                                <img alt="Image: YouTube" height="16" src="/ico_youtube.png" width="15" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="LastFooterCol col">
                            <ul>
                                <li className="XbcShellFooterFirst">Region/Language:</li>
                                <li style={{ whiteSpace: "nowrap" }}><strong>United States</strong> / <a
                                    id="ctl00__footerControl__internationalHyperlink"
                                    href="/en-US/ChangeLocale.htm">International</a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <div>&copy;2021-2022 zunes.me</div>
                            <div>&copy;2011 Microsoft Corporation. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
