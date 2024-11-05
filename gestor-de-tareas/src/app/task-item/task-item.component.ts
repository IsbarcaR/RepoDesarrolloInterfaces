import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }

  onToggle() {
    this.toggle.emit(this.task.id);
  }
}
