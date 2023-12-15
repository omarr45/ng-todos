import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <header class="border border-b-2 border-slate-200 py-3">
      <p
        class="mx-auto flex max-w-5xl items-center justify-start gap-2 px-3 text-2xl font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="h-8 w-8"
        >
          <g
            fill="none"
            stroke="#888888"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <rect width="6" height="6" x="3" y="5" rx="1" />
            <path d="m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8" />
          </g>
        </svg>
        My Todos
      </p>
    </header>
    <main class="mx-auto max-w-5xl p-3">
      <router-outlet></router-outlet>
    </main>
  `,
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'todos';
}
