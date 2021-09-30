import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Task {
  ID?: number =  id;
  ModuleId?: string | null = 'm212';
  TaskType?: string = 'exam';
  RPAGtype?: string | null = "formative";
  TaskName?: string = 'Final 1'
  DueWeek?: number = 12;
  DueLesson?: number | null = 24;
}

