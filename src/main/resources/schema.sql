-- Inventory Item Table
CREATE TABLE inventory_item (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    photo_url VARCHAR(255)
);

-- Tags Table (for the @ElementCollection)
CREATE TABLE inventory_item_tags (
    inventory_item_id BIGINT,
    tags VARCHAR(255),
    FOREIGN KEY (inventory_item_id) REFERENCES inventory_item(id)
);