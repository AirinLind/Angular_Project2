import { Injectable, signal } from '@angular/core';
import { Day, Task } from '../shared/types/task.types';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = signal<Day[]>([
    { idDay: 1, dayTitle: 'ПНД', tasks: [] },
    { idDay: 2, dayTitle: 'ВТ', tasks: [] },
    { idDay: 3, dayTitle: 'СР', tasks: [] }
  ]);

  public getTasks(): Day[] {
    return this.tasks()
      .sort((a, b) => a.idDay - b.idDay)
      .map(day => ({
        ...day,
        tasks: day.tasks.sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0)) // сортировка задач по приоритету
      }));
  }

  public addTask(task: Task): void {
    this.tasks.update(tasks => {
      let day = tasks.find(d => d.dayTitle === task.dayOfWeek);
      
      if (!day) {
        const newDay: Day = {
          idDay: tasks.length + 1,
          dayTitle: task.dayOfWeek,
          tasks: []
        };
        tasks.push(newDay);
        day = newDay; 
      }
      day.tasks.push({ ...task, idTask: day.tasks.length + 1 });
      return [...tasks];
    });
  }

  public deleteTask(day: Day, task: Task): void {
    this.tasks.update(tasks => {
      const updatedTasks = tasks.map(d => {
        if (d.idDay === day.idDay) {
          return { ...d, tasks: d.tasks.filter(t => t.idTask !== task.idTask) };
        }
        return d;
      });
      return updatedTasks;
    });
  }

  public deleteDay(day: Day): void {
    this.tasks.update(tasks => tasks.filter(d => d.idDay !== day.idDay));
  }
}
