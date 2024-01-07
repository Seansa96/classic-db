//required modules
const Database = require('wow-classic-items')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 5000;
const app = express();

const items = new Database.Items
const professions = new Database.Professions
const zones = new Database.Zones
const classes = new Database.Classes

app.get('/api/items', (req, res) => {
    const items = new Database.Items();
    const itemId = parseInt(req.query.itemid); // Get the itemid from query parameters

    if (!isNaN(itemId)) {
        // Find the item with the specified itemId
        const item = items.find(i => i.itemId === itemId);
        if (item) {
            res.json(item); // Send the found item
        } else {
            res.status(404).json({ message: 'Item not found' }); // Item not found
        }
    } else {
        res.status(400).json({ message: 'Invalid item ID' }); // Invalid itemId provided
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));