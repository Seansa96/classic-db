//required modules
const Database = require('wow-classic-items')
const express = require('express')
require('dotenv').config()
const validator = require('validator')
const core = require('cors')

const PORT = process.env.PORT || 5000;
const app = express();

const items = new Database.Items()
const professions = new Database.Professions()
const zones = new Database.Zones()
const classes = new Database.Classes()


app.use(core())


app.get('/api/items', (req, res) => {
    const items = new Database.Items();
    const itemId = req.query.itemid;
    const itemName = req.query.name;

    if (itemId && validator.isInt(itemId, { min: 1 })) {
        // Find the item with the specified itemId
        const item = items.find(i => i.itemId === parseInt(itemId));
        if (item) {
            res.json(item); // Send the found item
        } else {
            res.status(404).json({ message: 'Item not found' }); // Item not found
        }
    } else if (itemName && validator.isLength(itemName, { min: 1, max: 100 })) {
        // Sanitize and handle case-insensitive search
        const sanitizedItemName = validator.escape(itemName).toLowerCase();
        const item = items.find(i => i.name.toLowerCase() === sanitizedItemName);
        if (item) {
            res.json(item); // Send the found item
        } else {
            res.status(404).json({ message: 'Item not found' }); // Item not found
        }
    } else {
        res.status(400).json({ message: 'Invalid query parameters' }); // Invalid parameters provided
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));