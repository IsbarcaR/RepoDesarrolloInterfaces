import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {  // Agrega "export" aquí para que la interfaz sea exportable
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }

  toggleTaskStatus(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks);
    }
  }
}
