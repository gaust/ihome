import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryItem } from '../inventory-item.model';

@Component({
  selector: 'app-add-item',
  template: `
    <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <input matInput placeholder="Name" formControlName="name">
      </mat-form-field>
      <mat-form-field>
        <textarea matInput placeholder="Description" formControlName="description"></textarea>
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Photo URL" formControlName="photoUrl">
      </mat-form-field>
      <mat-form-field>
        <mat-chip-list #chipList>
          <mat-chip *ngFor="let tag of tags" (removed)="removeTag(tag)">
            {{tag}}
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <input placeholder="New tag..."
                 [matChipInputFor]="chipList"
                 (matChipInputTokenEnd)="addTag($event)">
        </mat-chip-list>
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit" [disabled]="!itemForm.valid">Add Item</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin-bottom: 20px;
    }
  `]
})
export class AddItemComponent {
  @Output() itemAdded = new EventEmitter<InventoryItem>();
  itemForm: FormGroup;
  tags: string[] = [];

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      photoUrl: ['', Validators.required],
    });
  }

  addTag(event: any) {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const newItem: InventoryItem = {
        ...this.itemForm.value,
        tags: this.tags
      };
      this.itemAdded.emit(newItem);
      this.itemForm.reset();
      this.tags = [];
    }
  }
}