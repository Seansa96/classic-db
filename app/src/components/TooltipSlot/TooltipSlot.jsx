import React from 'react';
import PropTypes from 'prop-types';
import './TooltipSlot.css';

const TooltipSlot = ({ slot, imgUrl, onSlotClick }) => {
    const placeholderStyle = imgUrl ? { backgroundImage: `url(${imgUrl})` } : {};

    return (
        <div className={`tooltip-slot ${slot}`}>
            <div className="item-slot">
                <div className="item-slot-placeholder" style={placeholderStyle} onClick={onSlotClick}>
                    {/* Placeholder content if needed */}
                </div>
            </div>
        </div>
    );
};

TooltipSlot.propTypes = {
    slot: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    onSlotClick: PropTypes.func,
};

TooltipSlot.defaultProps = {
    slot: 'defaultSlot',
    imgUrl: '',
    onSlotClick: () => {},
};

export default TooltipSlot;