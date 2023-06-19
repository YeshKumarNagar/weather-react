import React, { useState } from "react";
import ClodyTab from "./all-tabs/cloudy-tab";
import FoggyTab from "./all-tabs/foggy-tab";
import SunnyTab from "./all-tabs/sunny-tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("foggy");
  const [activeComponent, setActiveComponent] = useState(<FoggyTab />);

  const handlefoggy = () => {
    setActiveTab("foggy");
    setActiveComponent(<FoggyTab />);
  };
  const handlesunny = () => {
    setActiveTab("sunny");
    setActiveComponent(<SunnyTab />);
  };
  const handlecloudy = () => {
    setActiveTab("cloudy");
    setActiveComponent(<ClodyTab />);
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "foggy" ? "active" : ""}
          onClick={handlefoggy}
        >
          Foggy
        </li>
        <li></li>
        <li
          className={activeTab === "sunny" ? "active" : ""}
          onClick={handlesunny}
        >
          Sunny
        </li>
        <li></li>
        <li
          className={activeTab === "cloudy" ? "active" : ""}
          onClick={handlecloudy}
        >
          Cloudy
        </li>
      </ul>
      <div className="outlet">{activeComponent}</div>
    </div>
  );
};
export default Tabs;
