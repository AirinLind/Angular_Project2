import { Component, Signal, computed, inject } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskFormComponent, TaskListComponent]
})
export class AppComponent {
  private taskService = inject(TaskService);
  public days: Signal<any[]> = computed(() => this.taskService.getTasks());

  public updateTasks = (): void => {
    this.days = computed(() => this.taskService.getTasks());
  };
}
