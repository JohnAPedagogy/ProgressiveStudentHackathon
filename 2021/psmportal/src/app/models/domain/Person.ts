// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Person {
  static metadata:any={
    'pathwayId':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'departmentId':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'groupId':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'uniCode':{
      "required":true,
      "max":7,
      "type":"text",
    },
    'sgCode':{
      "required":true,
      "max":5,
      "type":"text",
    },
    'password':{
      "required":true,
      "max":5,
      "type":"text",
    },
    'position':{
      "required":true,
      "max":5,
      "type":"text",
    },
    'activationCode':{
      "required":true,
      "max":5,
      "type":"text",
    },
    'lastName':{
      "required":true,
      "max":20,
      "type":"text",
    },
    'otherNames':{
      "required":true,
      "max":20,
      "type":"text",
    },
    'isActive':{
      "required":true,
      "type":"boolean",
    },
    'startDate':{
      "type":"date",
      "required":true,
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  id: number =  uid;
  groupId?: number=1;
  pathwayId?: number=1;
  departmentId?: number=1;
  uniCode?: string = `u20${uid.toString().padEnd(5,'0')}`;
  sgCode?: string | null = `s20${uid.toString().padEnd(5,'0')}`;
  password?: string;
  position?: string;
  activationCode?: string;
  isActive?: boolean = false;
  lastName?: string = faker.name.lastName();
  otherNames?: string = faker.name.firstName();
  startDate?: Date | string = '2021-01-01'
}
