import * as faker from "faker";
import { Required } from "./model_decorators";

const id = faker.datatype.number(99999);

export class Group {
  @Required(5)
  ID?: string =  id.toString();
  GroupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  P2PCoach?: string = "Francisco Hernandez";
  TaughtTerm?: string = '1';
} 
