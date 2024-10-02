"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(!pages);
    }
  };

  return (
    <div className={menuOpen ? "sidebar__area open" : "sidebar__area"}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button
            className="sidebar__close-btn"
            id="sidebar__close-btn"
            onClick={() => setMenuOpen(false)}
          >
            <p>
              <i className="fas fa-times"></i>
            </p>
            <p>close</p>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="logo mb-40">
            <Link href="/">
              <Link href="/">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </Link>
            </Link>
          </div>
          <div className="mm-menu">
            <ul>
              <li className={home ? "has-droupdown active" : "has-droupdown"}>
                <a
                  Link
                  href="/"
                  onClick={() => {
                    openMobileMenu("home");
                  }}
                >
                  Home
                </a>
                <ul className={home ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/">
                      <Link href="/">Home 1</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-2">
                      <Link href="/">Home 2</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-3">
                      <Link href="/">Home 3</Link>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={courses ? "has-droupdown active" : "has-droupdown"}
              >
                <a
                  Link
                  href="/"
                  onClick={() => {
                    openMobileMenu("courses");
                  }}
                >
                  Courses
                </a>
                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/course-grid">
                      <Link href="/">Courses </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/course-list">
                      <Link href="/">Course List</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/course-sidebar">
                      <Link href="/">Course Sidebar</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/course-details">
                      <Link href="/">Course Details</Link>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a
                  Link
                  href="/"
                  onClick={() => {
                    openMobileMenu("blog");
                  }}
                >
                  Blog
                </a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/blog" as="/blog">
                      <Link href="/">Blog</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <Link href="/">Blog Details</Link>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                <a
                  Link
                  href="/"
                  onClick={() => {
                    openMobileMenu("pages");
                  }}
                >
                  Pages
                </a>
                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                  <li>
                    <Link href="/about">
                      <Link href="/">About</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/instructor">
                      <Link href="/">Instructor</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/instructor-details">
                      <Link href="/">Instructor Details</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/event-details">
                      <Link href="/">Event Details</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart">
                      <Link href="/">My Cart</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/wishlist">
                      <Link href="/">My Wishlist</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/checkout">
                      <Link href="/">Checkout</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sign-in">
                      <Link href="/">Sign In</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sign-up">
                      <Link href="/">Sign Up</Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/error">
                      <Link href="/">Error</Link>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">
                  <Link href="/">Contact</Link>
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar__search p-relative mt-40 ">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="sidebar__cart mt-30">
            <Link href="#">
              <div className="header__cart-icon">
                <svg viewBox="0 0 24 24">
                  <circle className="st0" cx="9" cy="21" r="1" />
                  <circle className="st0" cx="20" cy="21" r="1" />
                  <Link
                    href="/"
                    ath
                    className="st0"
                    d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                  />
                </svg>
              </div>
              <span className="cart-item">2</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
