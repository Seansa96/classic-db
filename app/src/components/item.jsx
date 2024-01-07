import React, { useState } from 'react';

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

    const handleSubmit = async () => {
        // Basic frontend validation/sanitization
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
                    <input type="text" value={itemName} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : itemData ? (
                <div>
                    <img src={itemData.icon} alt={itemData.name} />
                    {/* Tooltip logic */}
                </div>
            ) : (
                <span>Select Item</span>
            )}
        </div>
    );
};

export default item;
