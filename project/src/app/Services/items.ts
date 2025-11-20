import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Item } from './models';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getItems(query?: string, limit = 10): Observable<Item[]> {
    const url = query ? `${this.baseUrl}/search?q=${query}&limit=${limit}`
      : `${this.baseUrl}?limit=${limit}`;
    return this.http.get<any>(url).pipe(map(res => res.products));
  }

  getItemById(id: string | number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }
}
