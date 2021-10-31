import * as faker from "faker";

const id = faker.datatype.number(99999);

export class PathwayModule {
  static metadata:any={
    'ModuleID':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'PathwayID':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  ID?: number = id;
  ModuleID?: string = ' 177717';
  PathwayID?: string = '1182';
}  
