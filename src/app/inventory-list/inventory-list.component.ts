import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item.model';

@Component({
  selector: 'app-inventory-list',
  template: `
    <div class="inventory-list">
      <app-add-item (itemAdded)="addItem($event)"></app-add-item>
      <app-inventory-item *ngFor="let item of items" [item]="item"></app-inventory-item>
    </div>
  `,
  styles: [`
    .inventory-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  `]
})
export class InventoryListComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.inventoryService.getItems().subscribe(
      (items) => this.items = items,
      (error) => console.error('Error loading items', error)
    );
  }

  addItem(item: InventoryItem) {
    this.inventoryService.addItem(item).subscribe(
      (newItem) => this.items.push(newItem),
      (error) => console.error('Error adding item', error)
    );
  }
}