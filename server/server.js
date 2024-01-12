//required modules
const Database = require("wow-classic-items");
const express = require("express");
const validator = require("validator");
const core = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const crypto = require("crypto");
require("dotenv").config();
require('crypto').randomBytes(64).toString('hex');
const { v4: uuidv4 } = require('uuid');


const PORT = process.env.PORT;
const app = express();

// Classic-db objects
const items = new Database.Items();
const professions = new Database.Professions();
const zones = new Database.Zones();
const classes = new Database.Classes();

app.use(core());
app.use(cookieParser());
app.use(
    cookieSession({
        name: "session",
        keys: [crypto.randomBytes(48).toString('hex'),
        crypto.randomBytes(48).toString('hex')],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        secure: false,
        httpOnly: false,
    })
);

// Item database API
app.get("/api/items", (req, res) => {
  const items = new Database.Items();
  const itemId = req.query.itemid;
  const itemName = req.query.name;

  if (itemId && validator.isInt(itemId, { min: 1 })) {
    // Find the item with the specified itemId
    const item = items.find((i) => i.itemId === parseInt(itemId));
    if (item) {
      res.json(item); // Send the found item
    } else {
      res.status(404).json({ message: "Item not found" }); // Item not found
    }
  } else if (itemName && validator.isLength(itemName, { min: 1, max: 100 })) {
    // Sanitize and handle case-insensitive search
    const sanitizedItemName = validator.escape(itemName).toLowerCase();
    const item = items.find((i) => i.name.toLowerCase() === sanitizedItemName);
    if (item) {
      res.json(item); // Send the found item
    } else {
      res.status(404).json({ message: "Item not found" }); // Item not found
    }
  } else {
    res.status(400).json({ message: "Invalid query parameters" }); // Invalid parameters provided
  }
});

app.get("/set-cookie", (req, res) => {
  const userID = uuidv4();
  req.session.userID = userID;
  

  console.log(res.send("Cookie set"));
  console.log(userID);
  
  
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
