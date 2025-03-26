export interface Task {
  idTask: number;
  titleTask: string;
  priority: boolean;
  dayOfWeek: string;
}

export interface Day {
  idDay: number;
  dayTitle: string;
  tasks: Task[];
}
