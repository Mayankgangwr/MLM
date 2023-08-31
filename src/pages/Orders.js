import React, { useState, useEffect } from "react";
import { OrderList } from "primereact/orderlist";
import { ProductService } from "./ProductService";
import "./Orders.css";
import Nav from "./nav";
import BottomNav from "./bottomnav";
export default function Orders() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <div className="d-flex flex-wrap p-2 align-items-center justify-content-between">
        <div className="d-flex flex-wrap align-items-center justify-content-start gap-3">
          <img
            className="shadow-2 flex-shrink-0 border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
            alt={item.name}
            style={{ width: "56px", borderRadius: "5px" }}
          />
          <div className="flex-1 flex flex-column gap-2 xl:mr-8">
            <span className="fw-bold">{item.name}</span>
            <div className="flex align-items-center gap-2">
              <span>{`10`}</span>
            </div>
          </div>
        </div>
        <span className="fw-bold text-900">${item.price}</span>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="main">
        <OrderList
          value={products}
          onChange={(e) => setProducts(e.value)}
          itemTemplate={itemTemplate}
          header="Orders"
        ></OrderList>
        <BottomNav />
      </div>
    </>
  );
}
