import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Group {
  id?: number =  id;
  groupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  p2pCoach?: string = "Francisco Hernandez";
  taughtTerm?: string = '1';
} 
