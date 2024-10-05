package com.example.homeinventorybackend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class InventoryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String photoUrl;

    @ElementCollection
    private List<String> tags;
}