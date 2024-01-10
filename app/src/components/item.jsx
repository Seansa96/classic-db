import React, { useState } from 'react';
import '../assets/WoW_icon.svg';
import Gear from './gear';

const item = ({ slot }) => {
    const [itemName, setItemName] = useState('');
    const [itemData, setItemData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleItemClick = () => {
        // Logic to handle item slot click
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        let url = '';
        let query = itemName.trim();
        if (!query) {
            alert("Please enter an item name or ID.");
            return;
        }

        // Check if input is numeric (item ID)
        if (/^\d+$/.test(query)) {
            // Prepare URL with 'itemid' as a parameter
            url = `http://localhost:5000/api/items?itemid=${query}`;
        } else if (/^[a-zA-Z\s]+$/.test(query)) {
            // Prepare URL with 'name' as a parameter, if names are allowed
            url = `http://localhost:5000/api/items?name=${encodeURIComponent(query)}`;
        } else {
            alert("That's not quite right. Please enter a valid item name or ID.");
            return;
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setItemData(data);
        } catch (error) {
            console.error("Fetching error: ", error);
        }
        setIsEditing(false);
    };
    

    return (
        <div className={`item-slot ${slot}`} onClick={handleItemClick}>
            {isEditing ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={itemName} onChange={handleInputChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            

                        ) : itemData ? (
                            <div>
                                <a href={`https://www.wowhead.com/classic/item=${itemData.itemId}`} target="_blank" rel="noopener noreferrer">
                                    <img src={itemData.icon} alt={itemData.name} />
                                </a>
                                {/* Tooltip logic */}
                            </div>
                        ) : (
                            <span>{slot}</span>
                        )}
        </div>
    );
};

export default item;
