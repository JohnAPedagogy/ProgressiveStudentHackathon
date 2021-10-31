// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Resource {
  static metadata:any={
    'resourceDescription':{
      "required":false,
      "type":"text",
      "max": 30,
    },
    'parentId':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'resourceCategory':{
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'resourceName':{
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'componentName':{
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'tableName':{
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'resourceUrl':{
      "required":true,
      "type":"text",
    },
    'repoContext':{
      "required":true,
      "type":"text",
    },
    'modelTemplate':{
      "required":true,
      "type":"text",
    },
    'id':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };
  id: number =  uid;
  resourceUrl?: string;
  resourceName?: string;
  resourceDescription?: string;
  resourceCategory?: number;
  componentName?: string ;
  tableName?: string;
  repoContext?: any;
  modelTemplate?: object;
  parentId?: number;
}
