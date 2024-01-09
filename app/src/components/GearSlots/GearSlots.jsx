// GearSlots.js
import React from 'react';
import TooltipSlot from '../TooltipSlot/TooltipSlot';

const GearSlots = () => {
    const Gear = {
        HEAD: 'head',
        NECK: 'neck',
        SHOULDER: 'shoulder',
        SHIRT: 'shirt',
        CHEST: 'chest',
        WAIST: 'waist',
        LEGS: 'legs',
        FEET: 'feet',
        WRIST: 'wrist',
        HANDS: 'hands',
        FINGER1: 'finger1',
        FINGER2: 'finger2',
        TRINKET1: 'trinket1',
        TRINKET2: 'trinket2',
        BACK: 'back',
        MAIN_HAND: 'main_hand',
        OFF_HAND: 'off_hand',
        RANGED: 'ranged'
    };

    const gearSlots = Object.values(Gear).map((slot) => (
        <TooltipSlot key={slot} slotName={slot} imgUrl={"C:\Users\tony\dev\classic-db\app\src\assets\plagerism.jpg"}/>
    ));

    return <div className="gear-slots">{gearSlots}</div>;
};

export default GearSlots;