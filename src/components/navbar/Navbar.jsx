"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/about",
  },
  {
    id: 3,
    title: "Cars",
    url: "/cars",
  },
  {
    id: 4,
    title: "News",
    url: "/news",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleLinks = () => {
    if (window.innerWidth < 1024) {
      setShowLinks(!showLinks);
    }
  };

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const changeBackground = () => {
    if (window.innerWidth >= 1024 && window.scrollY >= 80) {
      setNavbar(true);
      if (showLinks) {
        setNavbar(false);
      }
    } else if (window.innerWidth < 1024 && window.scrollY >= 80) {
      setNavbar(false);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={`${navbar ? styles.containerActive : styles.container}`}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link href="/">
            <h1 className={styles.logo}>
              Yubo <br />
              <span>Rental</span>
            </h1>
          </Link>
          <button
            className={`${showLinks ? styles.navToggleShow : styles.navToggle}`}
            onClick={toggleLinks}
          >
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={styles.linksContainer} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => (
              <li>
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.link}
                  onClick={toggleLinks}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className={styles.signIn} href="/dashboard/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
