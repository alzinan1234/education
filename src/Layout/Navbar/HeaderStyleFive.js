import React, { useState, useEffect, Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BurgerMenus from "./BurgerMenus";
import Head from "next/head";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch";

const HeaderStyleFive = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".header__area");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <title>
          Educal – Online Course and Education React, Nextjs Template
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div
          id="header-sticky"
          className="header__area header__transparent header__padding-2"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <p>
                        <img
                          className="logo-white"
                          src="assets/img/logo/logo-2.png"
                          alt="logo"
                        />
                        <img
                          className="logo-black"
                          src="assets/img/logo/logo.png"
                          alt="logo"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
                <div className="main-menu main-menu-3 d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">
                          <p>Home</p>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/">
                              <p>Home Style 1</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-2">
                              <p>Home Style 2</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/home-3">
                              <p>Home Style 3</p>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/course-grid">
                          <p>Courses</p>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/course-grid">
                              <p>Courses</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-list">
                              <p>Courses List</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-sidebar">
                              <p>Courses Sidebar</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-details">
                              <p>Courses Details</p>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog">
                          <p>Blog</p>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/blog">
                              <p>Blog</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog-details">
                              <p>Blog Details</p>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/course-grid">
                          <p>Pages</p>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/about">
                              <p>About</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Instructor</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor-details">
                              <p>Instructor Details</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/event-details">
                              <p>Event Details</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cart">
                              <p>My Cart</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/wishlist">
                              <p>My Wishlist</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/checkout">
                              <p>Checkout</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/sign-in">
                              <p>Sign In</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/sign-up">
                              <p>Sign Up</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/error">
                              <p>Error</p>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">
                          <p>Contact</p>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="header__search-2">
                    <svg
                      className="search-toggle"
                      onClick={() => {
                        setSearchOpen(!searchOpen);
                      }}
                      viewBox="0 0 584.4 584.4"
                    >
                      <g>
                        <g>
                          <path
                            className="st0"
                            d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                          />
                          <path
                            className="st1"
                            d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                    <Link href="/sign-up">
                      <p className="e-btn">Sign Up</p>
                    </Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30"
                      id="sidebar-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>

        <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <div
          onClick={() => setSearchOpen(false)}
          className={searchOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default HeaderStyleFive;
