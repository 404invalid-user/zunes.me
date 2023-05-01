import styles from "@/styles/Nav.module.css";
import Toasts from "@/components/NavToasts";
import { useState } from "react";

import menuItems from "@/data/navbar.json";

function Menus({ selected }) {
  return (
    <div className={`${styles.menu}`}>
      {menuItems.map((item) => (
        <Menu item={item} selected={selected} Key={item.name} />
      ))}
    </div>
  );
}

function Menu({ item, selected }) {
  console.log(item);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`${styles.menuItem}`}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      key={item.name}
    >
      <a
        className={`${styles.menuItemName}`}
        style={{ color: selected == item.name ? "#333" : "" }}
        href={item.link || "#"}
      >
        {item.name}
      </a>
      {item.submenu?.length >= 1 ? (
        <ul
          className={`${styles.subMenu} events ${isHovering ? "show" : ""} `}
          style={{
            display: isHovering ? "block" : "none",
          }}
        >
          {/* This div covers the border so there wont be a 1px section to glitch the onMouseOut event */}

          <div
            style={{
              position: "absolute",
              width: "100%",
              left: "0",
              height: "1px",
              background: "transparent",
              top: "-1px",
              zIndex: 9999,
            }}
          ></div>

          <div style={{ float: "left" }}>
            {item.submenu.map((submenuItem) => (
              <li key={submenuItem.name}>
                <a href={submenuItem.link || "#"}>{submenuItem.name}</a>
              </li>
            ))}
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default function Nav({ selected }) {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.naving}`}>
        <div className={`${styles.topwrap}`}>
          <div className={`${styles.top}`}>
            <div className={`${styles.buttons}`}>
              <a href="http://www.zunes.me/en-US/support/">Support</a>
              <span>|</span>
              <a
                href="http://live.zunes.me/signin.ashx?ru=http%3a%2f%2fsocial.zunes.me%2fhome"
                className={`${styles.zunetag}`}
              >
                sign in
              </a>
            </div>
            <img
              className={`${styles.zunecard}`}
              alt=""
              src="/assets/img/zunetile_default.jpg"
              style={{
                height: "100%",
              }}
              priority
            />
          </div>
        </div>
        <div className={`${styles.navwrap}`}>
          <a href="http://www.zunes.me/" style={{ marginLeft: "10px" }}>
            <img
              src="/assets/img/zunelogo.png"
              alt="Zunes.me"
              style={{
                width: "84px",
              }}
              priority
            />
          </a>
          <Menus selected={selected} />
          <div className={`${styles.search}`}>
            <input id="q" placeholder="search" />
          </div>
        </div>
      </div>

      <Toasts />
    </nav>
  );
}
