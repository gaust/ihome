package com.example.homeinventorybackend.service;

import com.example.homeinventorybackend.model.InventoryItem;
import com.example.homeinventorybackend.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryItemService {

    @Autowired
    private InventoryItemRepository repository;

    public List<InventoryItem> getAllItems() {
        return repository.findAll();
    }

    public InventoryItem getItemById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public InventoryItem saveItem(InventoryItem item) {
        return repository.save(item);
    }

    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}