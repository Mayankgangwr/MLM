import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Orders.css";
import "./Cart.css";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";

const footer = (cart) => {
  const qty = cart.reduce((total, el) => (total = total + el.qty), 0);
  const price = cart.reduce(
    (total, el) => (total = total + el.price * el.qty),
    0
  );
  return (
    <>
      <div className=" p-message-enter-done pb-2 order-footer">
        <div className="left-summery d-flex align-items-start justify-content-between">
          <div className="p-message-wrapper">
            <span className="summary">{`Total(${qty} Items)`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="summary">{`Taxs(18%)`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="summary">{`Delivery Charge`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="summary">{`Discount`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="subtotal">{`Subtotal`}</span>
          </div>
        </div>
        <div className="left-summery d-flex justify-content-between">
          <div className="p-message-wrapper">
            <span className="detail">{`₹${((price / 100) * 82).toFixed(
              2
            )}`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="detail">{`₹${((price / 100) * 18).toFixed(
              2
            )}`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="detail">{`Free`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="detail">{`₹${0}`}</span>
          </div>
          <div className="p-message-wrapper">
            <span className="subtotal">{`₹${price}`}</span>
          </div>
        </div>
      </div>
      <div className="cartui-continue">
        <button className="btn">Continue</button>
      </div>
    </>
  );
};
export default function Cart() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("userCartData"));
    cartData && setCart(cartData);
  }, []);
  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.cartId === itemId) {
        return { ...item, qty: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("userCartData", JSON.stringify(updatedCart));
  };

  const itemTemplate = (item) => {
    const handleRemoveCartItem = (itemId) => {
      const newCartItems = cart.filter((el) => el.cartId != itemId);
      setCart(newCartItems);
      localStorage.setItem("userCartData", JSON.stringify(newCartItems));
    };
    return (
      <>
        <div
          className="d-flex flex-wrap p-2 align-items-center justify-content-between shadow-3"
          style={{
            position: "relative",
            marginRight: "5px",
            marginBottom: "10px",
          }}
        >
          <i
            className="pi pi-times remove-cart-item bg-danger text-white"
            onClick={() => handleRemoveCartItem(item.cartId)}
          ></i>
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3">
            <img
              className="shadow-5 flex-shrink-0 border-round"
              src={`./img/${item.imageUrl}`}
              alt={item.name}
              style={{ width: "80px", height: "53.33px", borderRadius: "5px" }}
            />
            <div className="flex-1 d-flex flex-column gap-2 xl:mr-8">
              <span
                className="fst-italic"
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  flexDirection: "column",
                  lineHeight: "14px",
                }}
              >
                {item.name}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "5px",
                }}
              >
                {`Price : ₹${item.price.toFixed(2)} X ${item.qty}`}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "13px",
                }}
              >
                {`Total : ₹${(item.price * item.qty).toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="flex-1 d-flex xl:mr-8 qty-total-price-card justify-content-between">
            <div
              className="d-flex justify-content-between"
              style={{ width: "90px", alignItems: "center" }}
            >
              <i
                className="pi pi-minus fw-bold rounded border btn qty-icon"
                onClick={() => {
                  if (item.qty > 1) {
                    handleUpdateQuantity(item.cartId, item.qty - 1);
                  }
                }}
              ></i>
              <InputNumber
                inputId={`minmax-${item.cartId}`}
                value={item.qty}
                onChange={(e) => {
                  handleUpdateQuantity(item.cartId, e.value);
                }}
              />
              <i
                className="pi pi-plus fw-bold rounded border btn qty-icon"
                onClick={() => {
                  handleUpdateQuantity(item.cartId, item.qty + 1);
                }}
              ></i>
            </div>
            <span className="fst-italic total-price-card">
              {`Size : 250ml`}
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Nav />
      {cart && cart.length > 0 ? (
        <div style={{ marginTop: "46px", paddingBottom: "60px" }}>
          <div className="p-message p-component p-message-warn p-message-enter-done order-card">
            <div className="p-message-wrapper">
              <span className="summary">Total Selling:</span>
              <span className="detail">₹10000</span>
            </div>
            <div className="p-message-wrapper">
              <span className="summary">You Earn:</span>
              <span className="detail">₹1000</span>
            </div>
          </div>
          <div
            className="card flex justify-content-center shadow-3"
            style={{
              marginTop: "5px",
              marginBottom: "10px",
              borderRadius: "2px",
            }}
          >
            {cart != null && (
              <Card footer={footer(cart)}>
                {cart.map((item) => itemTemplate(item))}
              </Card>
            )}
          </div>
          <BottomNav />
        </div>
      ) : (
        <div className="empty-cart">
          <img
            alt="empty cart"
            src="./img/empty-cart.png"
            className="empty-cart-img"
          />
          <h3 className="empty-cart-heading">Your Cart is Empty</h3>
          <p className="empty-cart-paragraph">Add something to make happy</p>
          <NavLink
            to="/inventory"
            className="btn btn-danger btn-rounded mt-3"
            style={{ width: "80%" }}
          >
            Continue Shopping
          </NavLink>
        </div>
      )}
    </>
  );
}
