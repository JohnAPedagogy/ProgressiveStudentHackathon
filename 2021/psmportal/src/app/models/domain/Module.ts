import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Module {
  moduleId?: number =  id;
  moduleCode?: string = `m ${id.toString().padEnd(5,'0')}`;
  moduleName?: string = "Mathematics";
} 