import { Component, Input, Signal, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [NgFor]
})
export class TaskListComponent {
  @Input() public days: any[] = [];
  @Input() public updateTasks!: () => void;

  private taskService = inject(TaskService);

  public deleteTask(day: any, task: any): void {
    this.taskService.deleteTask(day, task);
    this.updateTasks();
  }

  public deleteDay(day: any): void {
    this.taskService.deleteDay(day);
    this.updateTasks();
  }
}
