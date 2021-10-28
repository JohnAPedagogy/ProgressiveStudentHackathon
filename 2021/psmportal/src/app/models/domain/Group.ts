import * as faker from "faker";
import { Required } from "./model_decorators";

const id = faker.datatype.number(99999);

export class Group {
  static metadata:any={
    'P2PCoach':{
      "required":true,
      "max":10,
      "min":3,
      "options":"P2pCoaches"
    },
    'GroupCode':{
      "required":true,
      "max":5
    },
    'TaughtTerm':{
      "required":true,
    },
    'ID':{
      "required":true,
      "min":7
    }
  };

  ID?: string =  id.toString();
  GroupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  P2PCoach?: string = "Francisco Hernandez";
  TaughtTerm?: string = '1';

} 
