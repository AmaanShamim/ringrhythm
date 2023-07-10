import React from "react";

export default function Navbar() {
  return (
    <>
      <div
        style={{
          height: "20vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "yellowgreen"
        }}
      >
        <div style={{
            display:"flex",
            flexDirection: "row"
        }}>
          <h1 style={{ fontFamily: "Noto Sans SC, sans-serif", color: "#181818" }}>RING</h1>
          <h1 style={{ fontFamily: "Noto Sans SC, sans-serif", color: "#353537" }}>RHYTHM</h1>
        </div>
        <div>
          <i className="fa-solid fa-sun fa-2xl"></i>
          <i className="fa-solid fa-moon fa-2xl"></i>
        </div>
      </div>
    </>
  );
}
