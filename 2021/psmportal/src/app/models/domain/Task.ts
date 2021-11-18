import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Task {
  static metadata:any={
    'RPAGType':{
      "displayName" : "RPAG Type",
      "required":true,
      "selectmetadata":"",
      "type":"select"
    },
    'TaskName':{
      "displayName" : "Task Name",
      "required":true,
      "max":30,
      "type":"text",
    },
    'DueWeek':{
      "displayName" : "Due Week",
      "required":true,
      "type":"number",
    },
    'DueLesson':{
      "displayName" : "Due Lesson",
      "required":true,
      "type":"number",
    },
    'TaskType':{
      "displayName" : "Task Type",
      "type":"select",
      "required":true,
      "selectmetadata":""
    },
    'ModuleId':{
      "displayName" : "Module ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID?: number =  id;
  ModuleId?: string | null = 'm212';
  TaskType?: string = 'exam';
  RPAGtype?: string | null = "formative";
  TaskName?: string = 'Final 1'
  DueWeek?: number = 12;
  DueLesson?: number | null = 24;
}

