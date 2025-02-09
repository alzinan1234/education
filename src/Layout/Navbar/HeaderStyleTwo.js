import React, { useState, useEffect, Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BurgerMenus from "./BurgerMenus";
import Head from "next/head";
import Image from "next/image";

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <p>
                        <img src="assets/img/logo/logo.png" alt="logo" />
                      </p>
                    </Link>
                  </div>
                  <div className="header__category d-none d-lg-block">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/course-grid">
                            <p className="cat-menu d-flex align-items-center">
                              <div className="cat-dot-icon d-inline-block">
                                <svg viewBox="0 0 276.2 276.2">
                                  <g>
                                    <g>
                                      <path
                                        className="cat-dot"
                                        d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    "
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z"
                                      />
                                      <path
                                        className="cat-dot"
                                        d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <p>Category</p>
                            </p>
                          </Link>
                          <ul className="cat-submenu">
                            <li>
                              <Link href="/course-grid">
                                <p>English Learning</p>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-grid">
                                <p>Web Development</p>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-grid">
                                <p>Logo Design</p>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-grid">
                                <p>Motion Graphics</p>
                              </Link>
                            </li>
                            <li>
                              <Link href="/course-grid">
                                <p>Video Edition</p>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-2 d-none d-xl-block">
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
                  <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                    <Link href="/sign-up">
                      <p className="e-btn">Sign Up</p>
                    </Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn ml-30"
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
      </header>
    </React.Fragment>
  );
};

export default HeaderTwo;
