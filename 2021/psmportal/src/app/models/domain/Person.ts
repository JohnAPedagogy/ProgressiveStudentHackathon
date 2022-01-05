// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Person {
  static metadata:any={
    'pathwayId':{
      "displayName" : "Pathway ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'departmentId':{
      "displayName" : "Department ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'groupId':{
      "displayName" : "Group ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'uniCode':{
      "displayName" : "University Code",
      "required":true,
      "max":7,
      "type":"text",
    },
    'sgCode':{
      "displayName" : "sg Code",
      "required":true,
      "max":5,
      "type":"text",
    },
    'password':{
      "displayName" : "Password",
      "required":true,
      "max":5,
      "type":"text",
    },
    'position':{
      "displayName" : "Position",
      "required":true,
      "max":5,
      "type":"text",
    },
    'activationCode':{
      "displayName" : "Activation Code",
      "required":true,
      "max":5,
      "type":"text",
    },
    'lastName':{
      "displayName" : "Last Name",
      "required":true,
      "max":20,
      "type":"text",
    },
    'otherNames':{
      "displayName" : "Other Names",
      "required":true,
      "max":20,
      "type":"text",
    },
    'isActive':{
      "displayName" : "Is Active?",
      "required":true,
      "type":"boolean",
    },
    'startDate':{
      "displayName" : "Start Date",
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
