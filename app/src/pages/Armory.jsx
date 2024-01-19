import React, { useState, useEffect} from "react";
import Item from "../components/item";
import Tooltiip from "../components/Tooltip/Tooltip";
import { Link } from "react-router-dom";
import "../Styles/item.css";
import "../components/Tooltip/Tooltip.css";
import defaultItems from "../components/defaultItem";
import "../Styles/Armory.css";



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
    
    <div className="item-container">
      {Object.keys(defaultItems).map((slot, index) => (
        <Item key={slot} slot={slot} defaultItem={defaultItemData[slot]} index={index} />
      ))}
    </div>
    
  );
};

export default Armory;