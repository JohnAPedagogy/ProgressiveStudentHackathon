import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Group {
  ID?: number =  id;
  GroupCode?: string = `g${id.toString().padEnd(5,'0')}`;
  P2PCoach?: string = "Francisco Hernandez";
  TaughtTerm?: string = '1';
} 
