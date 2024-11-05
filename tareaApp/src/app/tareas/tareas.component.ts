import { Component } from '@angular/core';

interface Tarea {
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  nuevaTarea: string = '';
  tareas: Tarea[] = [];

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ descripcion: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  toggleCompletada(index: number): void {
    this.tareas[index].completada = !this.tareas[index].completada;
  }

  eliminarTarea(index: number): void {
    this.tareas.splice(index, 1);
  }
}
