import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Module {
  static metadata:any={
    'ModuleName':{
      "displayName" : "Module Name",
      "required":true,
      "max":20,
      "min":3,
      "type":"text"
    },
    'ModuleCode':{
      "displayName" : "Module Code",
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
  ModuleCode?: string = `m ${id.toString().padEnd(5,'0')}`;
  ModuleName?: string = "Mathematics";
} 
