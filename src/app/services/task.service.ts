import { Injectable } from '@angular/core';
import { Day } from '../shared/types/task.types';

@Injectable({ providedIn: 'root' })
export class TaskService {
  public tasks: Day[] = [
    { idDay: 1, dayTitle: 'ПНД', tasks: [
        { idTask: 1, titleTask: 'Task 1', priority: false, dayOfWeek: 'Понедельник' },
        { idTask: 2, titleTask: 'Task 2', priority: true, dayOfWeek: 'Понедельник' }
      ]
    },
    { idDay: 2, dayTitle: 'СР', tasks: [
        { idTask: 1, titleTask: 'Task 3', priority: true, dayOfWeek: 'Среда' }
      ]
    },
    { idDay: 3, dayTitle: 'ВТ', tasks: [
        { idTask: 1, titleTask: 'Task 4', priority: false, dayOfWeek: 'Вторник' },
        { idTask: 2, titleTask: 'Task 5', priority: true, dayOfWeek: 'Вторник' }
      ]
    }
  ];

  getTasks(): Day[] {
    return this.tasks.sort((a, b) => a.idDay - b.idDay);
  }
}
