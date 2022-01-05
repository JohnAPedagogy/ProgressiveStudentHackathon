import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Pathway {
  static metadata:any={
    'PathwayName':{
      "displayName" : "Pathway Name",
      "required":true,
      "max":20,
      "min":3,
      "type":"text"
    },
    'PathwayCode':{
      "displayName" : "Pathway Code",
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
  PathwayCode?: string = `p${id.toString().padEnd(5,'0')}`;
  PathwayName?: string = "Computing IY1";
} 
