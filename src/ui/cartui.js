import React, { useState, useEffect } from "react";
import "./cartui.css";
import BottomNav from "../pages/bottomnav";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";

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
const CartUI = () => {
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
  const itemTemplate = (item, index) => {
    const handleRemoveCartItem = (itemId) => {
      const newCartItems = cart.filter((el) => el.cartId != itemId);
      setCart(newCartItems);
      localStorage.setItem("userCartData", JSON.stringify(newCartItems));
    };
    return (
      <div style={{ borderBottom: ".25px solid #ccc" }}>
        <div
          className="d-flex flex-wrap px-1 pb-2 justify-content-between"
          style={{
            position: "relative",
            paddingTop: "11px",
            marginRight: "5px",
            marginBottom: "2px",
            width: "100%",
          }}
        >
          <div
            className="d-flex flex-wrap align-items-start justify-content-start gap-3"
            style={{
              width: "90%",
              paddingLeft: "10px",
            }}
          >
            <img
              className="shadow-5 flex-shrink-0 border-round"
              src={
                index > 3
                  ? `./img/cartui${(index % 3) + 1}.jpg`
                  : `./img/cartui${index}.jpg`
              }
              alt={item.name}
              style={{
                width: "65px",
                height: "80px",
                borderRadius: "5px",
              }}
            />
            <div className="flex-1 d-flex flex-column gap-2 xl:mr-8">
              <span
                className="fst-italic"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginTop: "8px",
                  lineHeight: "14px",
                  color: "#17446f",
                }}
              >
                {`T-shart for man`}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "5px",
                  paddingTop: "4px",
                  paddingBottom: "1px",
                  color: "#767f98",
                }}
              >
                {`₹${item.price.toFixed(2)}-Size:250ml`}
              </span>
              <div
                className="d-flex justify-content-between"
                style={{ width: "110px", alignItems: "center" }}
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
                  inputStyle={{ backgroundColor: "#f0f7ff" }}
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
            </div>
          </div>
          <i
            className="fas fa-trash fw-bold text-danger text-center"
            style={{ width: "10%" }}
            onClick={() => handleRemoveCartItem(item.cartId)}
          ></i>
          {/* <div className="flex-1 d-flex xl:mr-8 qty-total-price-card justify-content-between"></div> */}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="cartui">
        <div className="cartui-herder">
          <i className="pi pi-arrow-left cartui-herder-back-arrow"></i>
          <span className="cartui-herder-title">Cart</span>
          <span className="cartui-herder-pro-qty">
            {cart && `(${cart.length})`}
          </span>
        </div>
        <div className="cartui-body">
          <div className="cartui-item">
            {cart != null && (
              <Card footer={footer(cart)} className="cartui-item-card">
                {cart.map((item, index) => itemTemplate(item, index + 1))}
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CartUI;
