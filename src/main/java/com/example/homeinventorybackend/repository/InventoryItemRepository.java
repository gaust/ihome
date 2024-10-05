package com.example.homeinventorybackend.repository;

import com.example.homeinventorybackend.model.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long> {
}