import React from 'react';
import Item from '../components/item';
import '../components/item.css';

const Armory = () => {
    return (
        <>
            <h1>Dashboard</h1>
            This works!
            <Item slot="head" />
            
        </>
    );
};

export default Armory;
