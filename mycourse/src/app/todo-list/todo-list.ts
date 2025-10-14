import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: any[] = [];
  limit: number = 15;
  isLoading = false;
  searchTerm = '';
  private searchSubject = new Subject<string>();
  private subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();

    const searchSub = this.searchSubject.pipe(
      debounceTime(400),
      switchMap(term => {
        this.isLoading = true;
        return this.todoService.searchTodos(term, this.limit).pipe(
          map(todos => {
            if (term.trim() === '') return todos;
            return todos.filter(t => t.title.toLowerCase().includes(term.toLowerCase()));
          })
        );
      })
    ).subscribe({
      next: (data) => {
        this.todos = data;
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });

    this.subscription.add(searchSub);
  }

  loadTodos() {
    this.isLoading = true;
    this.todoService.getTodos(this.limit).subscribe({
      next: (data) => {
        this.todos = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading todos:', err);
        this.isLoading = false;
      }
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.searchSubject.next(term);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
