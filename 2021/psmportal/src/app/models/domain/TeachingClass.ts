import * as faker from "faker";

const id = faker.datatype.number(99999);

export class TeachingClass {
  ID?: number =  id;
  PathwayModuleID?: string = 'pm1221';
  TutorPersonID?: string = 'u1221212';
}

