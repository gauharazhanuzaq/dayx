import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent {
  todos: any[] = [];
  isLoading = false;

  constructor(private todoService: TodoService) {}

  loadTodos() {
    this.isLoading = true;
    this.todoService.getTodos().subscribe({
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
}
