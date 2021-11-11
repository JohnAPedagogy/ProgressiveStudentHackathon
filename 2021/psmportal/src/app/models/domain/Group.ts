import * as faker from "faker";
import { Required } from "./model_decorators";

const id = faker.datatype.number(99999);

export class Group {
  static metadata:any={
    'P2PCoach':{
      "displayName" : "P2P Coach",
      "required":true,
      "max":10,
      "min":3,
      "selectmetadata":"",
      "type":"select"
    },
    'GroupCode':{
      "displayName" : "Group Code",
      "required":true,
      "max":5,
      "type":"text",
    },
    'TaughtTerm':{
      "displayName" : "Taught Term",
      "type":"select",
      "required":true,
      "selectmetadata":""
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };

  ID?: string =  id.toString();
  GroupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  P2PCoach?: string = "Francisco Hernandez";
  TaughtTerm?: string = '1';

} 
