import React, { useState, useEffect } from "react";
import { ProductService } from "./ProductService";
import "./Orders.css";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";

const footer = (item) => {
  return (
    <div className="p-message p-component p-message-success p-message-enter-done pb-2 order-footer">
      <div className="left-summery d-flex align-items-start justify-content-between">
        <div className="p-message-wrapper">
          <span className="summary">{`Product Qty : `}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="summary">{`Total Price : `}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="summary">{`Taxs(18%) : `}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="summary">{`Grand Total : `}</span>
        </div>
      </div>
      <div className="left-summery d-flex justify-content-between">
        <div className="p-message-wrapper">
          <span className="detail">{`${item.totalqty}`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹${item.total}`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹${item.tax}`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹${item.grandTotal}`}</span>
        </div>
      </div>
    </div>
  );
};
export default function Cart() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("userData"));
    cartData && setCart(cartData);
  }, []);

  const itemTemplate = (item) => {
    return (
      <>
        <div className="d-flex flex-wrap p-2 align-items-center justify-content-between shadow-3">
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3">
            <img
              className="shadow-5 flex-shrink-0 border-round"
              src={`./img/${item.image}`}
              alt={item.product}
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
                {item.product}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "5px",
                }}
              >
                {`Price : ₹${item.price.toFixed(2)} X ${item.quantity}`}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "13px",
                }}
              >
                {`Total : ₹${(item.price * item.quantity).toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="flex-1 d-flex xl:mr-8 qty-total-price-card justify-content-between">
            <div
              className="d-flex justify-content-between"
              style={{ width: "90px", alignItems: "center" }}
            >
              <i className="pi pi-minus fw-bold rounded border btn qty-icon"></i>
              <InputNumber inputId="minmax" value={100} />
              <i className="pi pi-plus fw-bold rounded border btn qty-icon"></i>
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
            <Card footer={footer(cart.cart)}>
              {cart.cart.items.map((item) => itemTemplate(item))}
            </Card>
          )}
        </div>
        <BottomNav />
      </div>
    </>
  );
}
