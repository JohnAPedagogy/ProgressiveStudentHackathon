import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Module {
  ID?: number =  id;
  ModuleCode?: string = `m ${id.toString().padEnd(5,'0')}`;
  ModuleName?: string = "Mathematics";
} 
