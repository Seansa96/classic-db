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
             <Item slot="Head" /> 
             <Item slot="Neck" />
        </>
    );
};

export default Armory;
