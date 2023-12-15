import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor() {}

  async getAllTodos(): Promise<Todo[]> {
    const data = await fetch(this.url);
    // return the first 20 todos (user 1 only)
    return (await data.json()).slice(0, 20) ?? [];
  }
}
