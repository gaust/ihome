import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory-item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost:8080/api/inventory'; // Update this with your Java backend URL

  constructor(private http: HttpClient) {}

  getItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiUrl);
  }

  addItem(item: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.apiUrl, item);
  }

  updateItem(item: InventoryItem): Observable<InventoryItem> {
    return this.http.put<InventoryItem>(`${this.apiUrl}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}