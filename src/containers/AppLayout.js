import React from "react";
import "../App.css";
import Header from "../components/Header";

const AppLayout = ({children}) => {
  return (
    <div className="Applayout">
      <Header />
      <main>{children}</main>   
    </div>
  );
}

export default AppLayout;