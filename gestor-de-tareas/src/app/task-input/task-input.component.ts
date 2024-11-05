import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
  @Output() newTask = new EventEmitter<string>();
  taskTitle = '';

  addTask() {
    if (this.taskTitle.trim()) {
      this.newTask.emit(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
