import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Home Inventory App</span>
    </mat-toolbar>
    <div class="container">
      <app-inventory-list></app-inventory-list>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'Home Inventory App';
}