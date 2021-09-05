import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Task {
  taskId?: number =  id;
  moduleId?: string | null = 'm212';
  taskType?: string = 'exam';
  RPAGtype?: string | null = "formative";
  taskName?: string = 'Final 1'
  dueWeek?: number = 12;
  dueLesson?: number | null = 24;
}

