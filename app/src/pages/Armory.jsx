import React from "react";
import Item from "../components/item";
import Tooltiip from "../components/Tooltip/Tooltip";
import { Link } from "react-router-dom";
import "../components/item.css";
import "../components/Tooltip/Tooltip.css";
import defaultItems from "../components/defaultItem";

const Armory = () => {
    return (
      <>
        <h1>Dashboard</h1>
        <Item slot="Head" defaultItem={defaultItems.Head} />
        <Item slot="Neck" defaultItem={defaultItems.Neck} />
        <Item slot="Shoulders" defaultItem={defaultItems.Shoulders} />
        <Item slot="Back" defaultItem={defaultItems.Back}/>
        <Item slot="Chest" defaultItem={defaultItems.Chest} />
        <Item slot="Wrists" defaultItem={defaultItems.Wrists} />
        <Item slot="Hands" defaultItem={defaultItems.Hands} />
        <Item slot="Waist" defaultItem={defaultItems.Waist} />
        <Item slot="Legs" defaultItem={defaultItems.Legs} />
        <Item slot="Feet" defaultItem={defaultItems.Feet} />
        <Item slot="Ring1" defaultItem={defaultItems.Ring1} />
        <Item slot="Ring2" defaultItem={defaultItems.Ring2} />
        <Item slot="Trinket1" defaultItem={defaultItems.Trinket1} />
        <Item slot="Trinket2" defaultItem={defaultItems.Trinket2} />
        <Item slot="MainHand" defaultItem={defaultItems.MainHand}/>
        <Item slot="OffHand" defaultItem={defaultItems.OffHand} />
      </>
    );
  };

export default Armory;
