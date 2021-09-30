import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Pathway {
  ID?: number =  id;
  PathwayCode?: string = `p${id.toString().padEnd(5,'0')}`;
  PathwayName?: string = "Computing IY1";
} 
