// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Progression {
  static metadata:any={
    'Comment':{
      "required":false,
      "type":"text",
      "max": 30,
    },
    'RPAGRated':{
      "required":true,
      "type":"boolean"
    },
    'PersonID':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'TaskID':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'CompletionStatus':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'TaskAssesment':{
      "required":true,
      "max":10,
      "type":"text",
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID?: number =  id;
  PersonID?: string | null = 'u12122212';
  TaskID?: string | null = 't1112';
  CompletionStatus?: boolean = false;
  TaskAssesment?: string | null = 'Math';
  RPAGRated?: boolean = true;
  Comment?: string | null = "Well Done"
}

