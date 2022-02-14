// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Batch {
  static metadata:any={

    'BatchCode':{
      "displayName" : "Batch Code",
      'required':true,
      'type': 'text'
    },
    'IsActive':{
      "displayName" : "Is Active?",
      'required':true,
      'type': 'boolean'
    },
    'EndBatchDate':{
      "displayName" : "End Batch Date",
      'required':true,
      'type': 'date'
    },
    'EndTermDate':{
      "displayName" : "End Term Date",
      'required':true,
      'type': 'date'
    },
    'MidTermDate':{
      "displayName" : "Mid Term Date",
      'required':true,
      'type': 'date'
    },
    'Term2StartDate':{
      "displayName" : "Term 2 Start Date",
      'required':true,
      'type': 'date'
    },

    'Term1StartDate':{
      "displayName" : "Term 1 Start Date",
      'required':true,
      'type': 'date',

    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID?: number =  id;
  BatchCode?: string =`'b10${id.toString().padEnd(5,'0')}`;
  Term1StartDate?: Date | string = '2021-01-01';
  Term2StartDate?: Date | string = '2021-08-01';
  MidTermDate?: Date | string = '2021-05-05';
  EndTermDate?: Date | string = '2021-10-21';
  EndBatchDate?: Date | string = '2021-10-21';
  IsActive?: boolean = true;
} 
