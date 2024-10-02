import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ShoppingCart = ({ setShopOpen, shopOpen }) => {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const [counter, setCounter] = useState(0);
  const [counterr, setCounterr] = useState(0);
  const [counterrr, setCounterrr] = useState(0);

  // Increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  // Decrease counter
  const decrease = () => {
    if (counter > 0) setCounter((count) => count - 1);
  };

  // Increase counter
  const increasee = () => {
    setCounterr((count) => count + 1);
  };

  // Decrease counter
  const decreasee = () => {
    if (counterr > 0) setCounterr((count) => count - 1);
  };

  // Increase counter
  const increaseee = () => {
    setCounterrr((count) => count + 1);
  };

  // Decrease counter
  const decreaseee = () => {
    if (counterrr > 0) setCounterrr((count) => count - 1);
  };

  return (
    <div className={shopOpen ? "sidebar__areas open" : "sidebar__areas"}>
      <div className="cartmini__area">
        <div className="cartmini__wrapper">
          <div className="cartmini__title">
            <h4>Shopping cart</h4>
          </div>
          <div className="cartmini__close">
            <button
              type="button"
              className="cartmini__close-btn"
              onClick={() => setShopOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="cartmini__widget">
            <div className="cartmini__inner">
              <ul>
                <li>
                  <div className="cartmini__thumb">
                    <Link href="#">
                      <img
                        src="assets/img/course/sm/cart-1.jpg"
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="cartmini__content">
                    <h5>
                      <Link href="#">
                        Strategy law and organization Foundation
                      </Link>
                    </h5>
                    <div className="product-quantity mt-10 mb-10">
                      <span className="cart-minus" onClick={decrease}>
                        -
                      </span>
                      <span className="cart-input">{counter}</span>
                      <span className="cart-plus" onClick={increase}>
                        +
                      </span>
                    </div>
                    <div className="product__sm-price-wrapper">
                      <span className="product__sm-price">$46.00</span>
                    </div>
                  </div>
                  <Link href="#" className="cartmini__del">
                    <i className="fas fa-times"></i>
                  </Link>
                </li>
                <li>
                  <div className="cartmini__thumb">
                    <Link href="#">
                      <img
                        src="assets/img/course/sm/cart-2.jpg"
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="cartmini__content">
                    <h5>
                      <Link href="#">
                        Fundamentals of music theory Learn new
                      </Link>
                    </h5>
                    <div className="product-quantity mt-10 mb-10">
                      <span className="cart-minus" onClick={decreaseee}>
                        -
                      </span>
                      <span className="cart-input">{counterrr}</span>
                      <span className="cart-plus" onClick={increaseee}>
                        +
                      </span>
                    </div>
                    <div className="product__sm-price-wrapper">
                      <span className="product__sm-price">$32.00</span>
                    </div>
                  </div>
                  <Link href="#" className="cartmini__del">
                    <i className="fas fa-times"></i>
                  </Link>
                </li>
                <li>
                  <div className="cartmini__thumb">
                    <Link href="#">
                      <img
                        src="assets/img/course/sm/cart-3.jpg"
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="cartmini__content">
                    <h5>
                      <Link href="#">
                        Strategy law and organization Foundation
                      </Link>
                    </h5>
                    <div className="product-quantity mt-10 mb-10">
                      <span className="cart-minus" onClick={decreasee}>
                        -
                      </span>
                      <span className="cart-input">{counterr}</span>
                      <span className="cart-plus" onClick={increasee}>
                        +
                      </span>
                    </div>
                    <div className="product__sm-price-wrapper">
                      <span className="product__sm-price">$62.00</span>
                    </div>
                  </div>
                  <Link href="#" className="cartmini__del">
                    <i className="fas fa-times"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cartmini__checkout">
              <div className="cartmini__checkout-title mb-30">
                <h4>Subtotal:</h4>
                <span>$113.00</span>
              </div>
              <div className="cartmini__checkout-btn">
                <Link href="/cart">
                  <p className="e-btn e-btn-border mb-10 w-100">View Cart</p>
                </Link>
                <Link href="/checkout">
                  <p className="e-btn w-100">Checkout</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
