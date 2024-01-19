import React, { useState,useEffect } from 'react';
import '../assets/WoW_icon.svg';
import Gear from './gear';



const Item = ({ slot, defaultItem, index }) => {
    const [itemName, setItemName] = useState(defaultItem ? defaultItem.name : '');
    const [itemData, setItemData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        if (!itemData && defaultItem && defaultItem.name !== '') {
            
            fetch(`http://localhost:5000/api/items?name=${defaultItem.name}`)
                .then(response => response.json())
                .then(data => {
                    setItemData(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setIsLoading(false);
                });

        }
    }, [itemData, defaultItem]);
  
    const handleItemClick = () => {
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
            alert("Please enter an item name.");
            return;
        }

        // Check if input contains only alphabetical characters and apostrophes
        if (/^[a-zA-Z\s']+$/g.test(query)) {
            // Prepare URL with 'name' as a parameter
            url = `http://localhost:5000/api/items?name=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a valid item name.");
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
        console.log(itemData.icon);
    };

    const getItemClass = (index) => {
        if (index < 7) return "first-group-class";
        if (index < 14) return "second-group-class";
        return "third-group-class";
      };
      const itemClass = getItemClass(index);
    

    return (
        <div className={`${itemClass}`} onClick={handleItemClick}>
            {isEditing ? (
                
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text"  onChange={handleInputChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : isLoading ? (
                <div className="spinner"></div>

                        ) : itemData ? (
                            <div>
                                <a href={`https://www.wowhead.com/classic/item=${itemData.itemId}`} target="_blank" rel="noopener noreferrer">
                                    <img src={itemData && itemData.icon} alt={itemData && itemData.name} />
                                </a>
                                {/* Tooltip logic */}
                            </div>
                        ) : (
                            <span>{slot}</span>
                        )}
        </div>
    );
};

export default Item;
