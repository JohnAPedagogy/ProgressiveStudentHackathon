import * as faker from "faker";
import { Required } from "./model_decorators";

const id = faker.datatype.number(99999);

export class Group {
  static metadata:any={
    'P2PCoach':{
      "required":true,
      "max":10,
      "min":3,
      "selectmetadata":"",
      "type":"select"
    },
    'GroupCode':{
      "required":true,
      "max":5,
      "type":"text",
    },
    'TaughtTerm':{
      "type":"select",
      "required":true,
      "selectmetadata":""
    },
    'ID':{
      "disabled":true,
      "type":"text",
      "required":true,
      "min":7
    }
  };

  ID?: string =  id.toString();
  GroupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  P2PCoach?: string = "Francisco Hernandez";
  TaughtTerm?: string = '1';

} 
