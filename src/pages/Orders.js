import React, { useState, useEffect } from "react";
import { ProductService } from "./ProductService";
import "./Orders.css";
import Nav from "./nav";
import BottomNav from "./bottomnav";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const header = (
  <>
    <div className="p-message p-component p-message-info p-message-enter-done order-card">
      <div className="p-message-wrapper">
        <span className="summary">ORD-ID:</span>
        <span className="detail">ORD00001</span>
      </div>
      <div className="p-message-wrapper">
        <span className="summary">ORD-AT:</span>
        <span className="detail">02/09/2023</span>
      </div>
    </div>
  </>
);
const footer = (
  <>
    <div className="p-message p-component p-message-success p-message-enter-done order-footer">
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
        <div className="p-message-wrapper">
          <span className="summary">{`Order Status : `}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="summary">{`Action : `}</span>
        </div>
      </div>
      <div className="left-summery d-flex justify-content-between">
        <div className="p-message-wrapper">
          <span className="detail">{`10`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹1000`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹180`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`₹1180`}</span>
        </div>
        <div className="p-message-wrapper">
          <span className="detail">{`Pending`}</span>
        </div>
        <div className="p-message-wrapper">
          <span
            className="detail"
            style={{ cursor: "pointer" }}
          >{`Click Here`}</span>
        </div>
      </div>
    </div>
  </>
);
export default function Orders() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <>
        <div className="d-flex flex-wrap p-2 align-items-center justify-content-between shadow-3">
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-3">
            <img
              className="shadow-5 flex-shrink-0 border-round"
              src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
              alt={item.name}
              style={{ width: "80px", borderRadius: "5px" }}
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
                {`Price : ₹${item.price} X 10`}
              </span>
              <span
                className="fst-italic"
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  lineHeight: "13px",
                }}
              >
                {`Total : ₹650`}
              </span>
            </div>
          </div>
          <div className="flex-1 d-flex xl:mr-8 qty-total-price-card">
            {/* <div
              className="d-flex justify-content-between"
              style={{ width: "100px" }}
            >
              <i className="pi pi-minus fs-6 fw-bold rounded btn qty-icon"></i>
              <InputNumber inputId="minmax" value={100} />
              <i className="pi pi-plus fs-6 fw-bold rounded btn qty-icon"></i>
            </div> */}
            <span className="fst-italic total-price-card">
              {`Size : 250ml`}
            </span>
          </div>
        </div>
      </>
    );
  };
  const ord = [1, 2, 3, 4];
  return (
    <>
      <Nav />
      <div style={{ marginTop: "45px", paddingBottom: "60px" }}>
        {ord.map((el) => (
          <div
            key={el}
            className="card flex justify-content-center shadow-3"
            style={{ marginTop: "15px", borderRadius: "2px" }}
          >
            <Card footer={footer} header={header}>
              {products.slice(0, 4).map((item) => itemTemplate(item))}
            </Card>
          </div>
        ))}

        <BottomNav />
      </div>
    </>
  );
}
