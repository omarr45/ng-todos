import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li
      [class]="
        'rounded border p-3 shadow hover:bg-slate-100 ' +
        (this.todo.completed
          ? 'bg-slate-200 text-red-600 line-through opacity-75 hover:bg-slate-200'
          : '')
      "
    >
      <p>
        <span>{{ todo.id }}.</span> {{ todo.title }}
      </p>
    </li>
  `,
})
export class TodoItemComponent {
  @Input() todo!: Todo;
}
