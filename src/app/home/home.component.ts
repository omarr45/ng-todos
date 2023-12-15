import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Todo } from '../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `
    <section>
      <form class="flex gap-3">
        <input
          class="w-full rounded border border-slate-200 px-3 py-3 ring-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          type="text"
          placeholder="Filter by text"
          #filter
        />
        <button
          type="button"
          class="rounded bg-blue-500 px-4 py-2 text-lg font-bold text-white ring-offset-2  hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <ul class="mt-3 flex flex-col gap-3">
        <app-todo-item
          *ngFor="let todo of filteredTodos"
          [todo]="todo"
        ></app-todo-item>
      </ul>
    </section>
  `,
})
export class HomeComponent {
  todos: Todo[] = [];

  todoService: TodosService = inject(TodosService);
  filteredTodos: Todo[] = [];

  constructor() {
    this.todoService.getAllTodos().then((data) => {
      this.todos = data;
      this.filteredTodos = data;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredTodos = this.todos;
    }

    this.filteredTodos = this.todos.filter(
      (todo) => todo?.title.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
