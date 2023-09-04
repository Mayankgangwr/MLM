import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./nav";
import BottomNav from "./bottomnav";
export default function Teams() {
  const [nodes] = useState([
    {
      id: 1,
      name: "Prince Kumri",
      as: "D.M",
      teamMember: 20,
    },
    {
      id: 2,
      name: "Prince Kumri",
      as: "D.M",
      teamMember: 20,
    },
    {
      id: 3,
      name: "Prince Kumri",
      as: "D.M",
      teamMember: 20,
    },
    {
      id: 4,
      name: "Prince Kumri",
      as: "D.M",
      teamMember: 20,
    },
    {
      id: 5,
      name: "Prince Kumri",
      as: "D.M",
      teamMember: 20,
    },
  ]);

  const representativesItemTemplate = (option) => {
    return (
      <div className="d-flex align-items-center gap-2">
        <img
          alt={option.name}
          src={`./img/b11.avif`}
          style={{
            borderRadius: "50%",
            height: "55px",
            width: "55px",
            padding: "1px",
            boxShadow:
              "0px 3px 7px 0px rgba(0,0,0,0.13), 0px 1px 2px 0px rgba(0,0,0,0.11)",
          }}
        />
        <div className="d-flex flex-column align-items-start">
          <span>{`${option.name}`}</span>
          <Link to="/team">
            <span>{`Team Members: ${option.teamMember}`}</span>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div style={{ marginTop: "45.5px", paddingBottom: "60px" }}>
        <div
          className="p-message p-component p-message-info p-message-enter-done order-card mb-1"
          style={{ padding: "0 8px" }}
        >
          <div className="p-message-wrapper">
            <i
              className="pi pi-arrow-left summary"
              style={{ marginTop: "2px" }}
            ></i>
            <span className="summary">Your Team</span>
          </div>
          <div className="p-message-wrapper">
            <span className="summary">Total Team:</span>
            <span className="detail">20</span>
          </div>
        </div>
        <div className="card">
          <DataTable value={nodes}>
            <Column
              field="Name"
              header="Employee Name"
              body={representativesItemTemplate}
              bodyStyle={{ padding: "9px 5px" }}
              headerStyle={{
                padding: "9px 25px",
                backgroundColor: "#fff2e2",
              }}
            ></Column>
            <Column
              field="as"
              header="Employee Post"
              bodyStyle={{ padding: "9px 5px", textAlign: "center" }}
              headerStyle={{
                padding: "9px 25px",
                backgroundColor: "#fff2e2",
              }}
            ></Column>
          </DataTable>
        </div>
        <BottomNav />
      </div>
    </>
  );
}
