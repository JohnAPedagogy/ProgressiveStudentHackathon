import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Pathway {
  pathwayId?: number =  id;
  pathwayCode?: string = `p${id.toString().padEnd(5,'0')}`;
  pathwayName?: string = "Computing IY1";
} 
