import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Day, Task } from '../../shared/types/task.types';
import {NgFor} from "@angular/common";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [NgFor],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public days: Day[] = []; 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.days = this.taskService.getTasks();
  }

  public trackDay(index: number, day: Day): number { 
    return day.idDay;
  }

  public trackTask(index: number, task: Task): number { 
    return task.idTask;
  }
}
