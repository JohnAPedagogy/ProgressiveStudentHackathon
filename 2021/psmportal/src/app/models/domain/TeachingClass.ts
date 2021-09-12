import * as faker from "faker";

const id = faker.datatype.number(99999);

export class TeachingClass {
  id?: number =  id;
  pathwayModuleId?: string = 'pm1221';
  tutorPersonId?: string = 'u1221212';
}

