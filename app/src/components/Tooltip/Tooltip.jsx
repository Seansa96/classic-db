import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ slot }) => {
    const [itemName, setItemName] = useState('');
    const [itemData, setItemData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('Item data updated:', itemData);
    }, [itemData]);

    const constructUrl = (query) => {
        if (/^\d+$/.test(query)) {
            return `http://localhost:5000/api/items?itemid=${query}`;
        } else if (/^[a-zA-Z\s]+$/.test(query)) {
            return `http://localhost:5000/api/items?name=${encodeURIComponent(query)}`;
        } else {
            throw new Error("Invalid input: Please enter a valid item name or ID.");
        }
    };

    const fetchData = async (query) => {
        try {
            const url = constructUrl(query);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setItemData(data);
        } catch (error) {
            setError(error.message);
            console.error("Fetching error: ", error);
        }
    };

    const handleItemClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    const handleSubmit = () => {
        fetchData(itemName.trim()).catch(e => console.error(e));
        setIsEditing(false);
        setItemName('');
    };

    return (
        <div className={`tooltip-slot ${slot}`} onClick={handleItemClick}>
            <div>
                    <input type="text" value={itemName} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Submit</button>
                    {error && <p className="error">{error}</p>}
            </div>
            {itemData && (
                <div className="item-data">
                        <img src={itemData.icon} alt={itemData.name || 'Item'} />
                        <p>{itemData.name || 'No name available'}</p>
                        <p>{itemData.quality || 'No quality info'}</p>
                        {/* Add more item details here as needed */}
                    </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    slot: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
    slot: 'defaultSlot',
};

export default Tooltip;
