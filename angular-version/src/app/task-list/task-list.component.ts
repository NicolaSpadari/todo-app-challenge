import { Component, OnInit } from '@angular/core';
import type { Todo } from "@/app/types";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  todos = [] as Todo[];

  ngOnInit(): void {
    if(localStorage.getItem('todos') !== null) {
        this.todos.push([...JSON.parse(localStorage.getItem('todos')!)] as unknown as Todo);
    }

    console.log("todos: ", this.todos);
  }
}
