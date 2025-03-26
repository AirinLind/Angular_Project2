import { Component, Input, Signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [ReactiveFormsModule, NgFor]
})
export class TaskFormComponent {
  @Input() public daysOfWeek: string[] = [];
  @Input() public updateTasks!: () => void;

  private formBuilder = inject(FormBuilder);
  private taskService = inject(TaskService);

  public taskForm: FormGroup = this.formBuilder.group({
    titleTask: [''],
    priority: [false],
    dayOfWeek: ['Понедельник']
  });

  public addTask(): void {
    if (this.taskForm.valid) {
      const taskData = {
        ...this.taskForm.value,
        priority: this.taskForm.value.priority === 'true' || this.taskForm.value.priority === true
      };
      this.taskService.addTask(taskData);
      this.taskForm.reset();
      this.updateTasks();
    }
  }
  
}
