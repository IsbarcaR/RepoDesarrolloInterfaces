import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';  // Importa Task desde task.service
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$;
  }

  addTask(title: string) {
    this.taskService.addTask(title);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleTaskStatus(id: number) {
    this.taskService.toggleTaskStatus(id);
  }
}
