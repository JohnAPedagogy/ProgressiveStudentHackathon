import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Task {
  static metadata:any={
    'RPAGType':{
      "required":true,
      "selectmetadata":"",
      "type":"select"
    },
    'TaskName':{
      "required":true,
      "max":30,
      "type":"text",
    },
    'DueWeek':{
      "required":true,
      "type":"number",
    },
    'DueLesson':{
      "required":true,
      "type":"number",
    },
    'TaskType':{
      "type":"select",
      "required":true,
      "selectmetadata":""
    },
    'ModuleId':{
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

