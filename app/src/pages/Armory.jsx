import React from 'react';
import Item from '../components/item';
import Tooltiip from '../components/Tooltip/Tooltip';
import { Link } from 'react-router-dom';
import '../components/item.css';
import '../components/Tooltip/Tooltip.css';

const Armory = () => {
    return (
        <>
            
            <h1>Dashboard</h1>
             {/* <Item slot="head" />  */}
            <Tooltiip slot="head" />
            {/* <Link to="https://www.wowhead.com/item=19019/" target="_blank">Thunderfury, Blessed Blade of the Windseeker</Link> */}
        </>
    );
};

export default Armory;
