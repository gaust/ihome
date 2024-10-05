import { Component, Input } from '@angular/core';
import { InventoryItem } from '../inventory-item.model';

@Component({
  selector: 'app-inventory-item',
  template: `
    <mat-card class="item-card">
      <img mat-card-image [src]="item.photoUrl" alt="Item photo">
      <mat-card-content>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <mat-chip-list>
          <mat-chip *ngFor="let tag of item.tags">{{ tag }}</mat-chip>
        </mat-chip-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .item-card {
      max-width: 300px;
    }
  `]
})
export class InventoryItemComponent {
  @Input() item!: InventoryItem;
}