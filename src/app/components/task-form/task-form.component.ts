import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  imports: [ReactiveFormsModule, NgFor],
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() public daysOfWeek: string[] = [];

  public taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      titleTask: [''],
      priority: [false],
      dayOfWeek: ['Понедельник']
    });
  }

  public addTask(): void {
    console.log(this.taskForm.value);
  }
}
