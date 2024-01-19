
-- Create a table for users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for gear items
CREATE TABLE gear_items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item_level INT NOT NULL,
    source VARCHAR(255),
    stat_preferences TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for gear loadouts
CREATE TABLE gear_loadouts (
    loadout_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    class VARCHAR(50) NOT NULL,
    specialization VARCHAR(50) NOT NULL,
    head_item_id INT REFERENCES gear_items(item_id),
    neck_item_id INT REFERENCES gear_items(item_id),
    shoulder_item_id INT REFERENCES gear_items(item_id),
    back_item_id INT REFERENCES gear_items(item_id),
    chest_item_id INT REFERENCES gear_items(item_id),
    wrist_item_id INT REFERENCES gear_items(item_id),
    hands_item_id INT REFERENCES gear_items(item_id),
    waist_item_id INT REFERENCES gear_items(item_id),
    legs_item_id INT REFERENCES gear_items(item_id),
    feet_item_id INT REFERENCES gear_items(item_id),
    finger1_item_id INT REFERENCES gear_items(item_id),
    finger2_item_id INT REFERENCES gear_items(item_id),
    trinket1_item_id INT REFERENCES gear_items(item_id),
    trinket2_item_id INT REFERENCES gear_items(item_id),
    main_hand_item_id INT REFERENCES gear_items(item_id),
    off_hand_item_id INT REFERENCES gear_items(item_id),
    popularity_score INT DEFAULT 0,
    times_chosen INT DEFAULT 0,
    average_item_level INT,
    pve_pvp_flag VARCHAR(10),
    time_to_acquire INT,
    user_feedback TEXT,
    version_expansion VARCHAR(50),
    associated_guides TEXT,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
