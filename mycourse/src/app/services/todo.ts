import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(limit?: number): Observable<any[]> {
    let url = this.apiUrl;
    if (limit) url += `?_limit=${limit}`;
    return this.http.get<any[]>(url);
  }

  searchTodos(query: string, limit: number = 15): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?_limit=${limit}`);
  }
}
