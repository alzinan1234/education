import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link href="/">
                          <p>
                            <img
                              src="assets/img/logo/logo-2.png"
                              alt="img not found"
                            />
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lesson plans to best.
                      </p>

                      <div className="footer__social">
                        <ul>
                          <li>
                            <p href="#">
                              <i className="fab fa-facebook-f"></i>
                            </p>
                          </li>
                          <li>
                            <p href="#" className="tw">
                              <i className="fab fa-twitter"></i>
                            </p>
                          </li>
                          <li>
                            <p href="#" className="pin">
                              <i className="fab fa-pinterest-p"></i>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Company</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/about">
                              <p>About</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-grid">
                              <p>Courses</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/event-details">
                              <p>Events</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Instructor</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Career</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Become a Teacher</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              <p>Contact</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Platform</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/instructor">
                              <p>Browse Library</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Library</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/instructor">
                              <p>Partners</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog">
                              <p>News & Blogs</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/about">
                              <p>FAQs</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-grid">
                              <p>Tutorials</p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Subscribe</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input mb-15">
                            <input
                              type="email"
                              placeholder="Your email address"
                            />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>
                          Get the latest news and updates right at your inbox.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <FooterBottom /> */}

          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__copyright text-center">
                    <p>
                      © 2022 Educal, All Rights Reserved. Design By{" "}
                      <Link href="/">Theme Pure</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
