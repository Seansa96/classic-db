import React, { useState, useEffect} from "react";
import Item from "../components/item";
import Tooltiip from "../components/Tooltip/Tooltip";
import { Link } from "react-router-dom";
import "../components/item.css";
import "../components/Tooltip/Tooltip.css";
import defaultItems from "../components/defaultItem";



const Armory = () => {
  const [defaultItemData, setDefaultItemData] = useState({});

  useEffect(() => {
    const fetchDefaultItems = async () => {
      const promises = Object.keys(defaultItems).map(async slot => {
        const response = await fetch(`http://localhost:5000/api/items?name=${defaultItems[slot].name}`);
        const data = await response.json();
        return { slot, data };
      });
  
      const results = await Promise.all(promises);
      const itemData = {};
      results.forEach(({ slot, data }) => {
        itemData[slot] = data;
      });
  
      setDefaultItemData(itemData);
    };
  
    fetchDefaultItems();
  }, []);

  return (
    <div>
      <h1>Gear Loadout</h1>
  

    <div className="armory">
      {Object.keys(defaultItems).map(slot => (
        <Item key={slot} slot={slot} defaultItem={defaultItemData[slot]} />
      ))}
    </div>
    </div>
  );
};

export default Armory;