package com.example.homeinventorybackend.controller;

import com.example.homeinventorybackend.model.InventoryItem;
import com.example.homeinventorybackend.service.InventoryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "http://localhost:4200")
public class InventoryItemController {

    @Autowired
    private InventoryItemService service;

    @GetMapping
    public List<InventoryItem> getAllItems() {
        return service.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem> getItemById(@PathVariable Long id) {
        InventoryItem item = service.getItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public InventoryItem createItem(@RequestBody InventoryItem item) {
        return service.saveItem(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InventoryItem> updateItem(@PathVariable Long id, @RequestBody InventoryItem item) {
        if (!id.equals(item.getId())) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(service.saveItem(item));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        service.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}