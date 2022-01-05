// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Resource {
  static metadata:any={
    'resourceDescription':{
      "displayName" : "Description",
      "required":false,
      "type":"text",
      "max": 30,
    },
    'parentId':{
      "displayName" : "Parent ID",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'resourceCategory':{
      "displayName" : "Category",
      "required":true,
      "type":"select",
      "selectmetadata":"",
    },
    'resourceName':{
      "displayName" : "Name",
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'componentName':{
      "displayName" : "Component Name",
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'tableName':{
      "displayName" : "Table Name",
      "required":true,
      "max":30,
      "min": 3,
      "type":"text",
    },
    'resourceUrl':{
      "displayName" : "Resource URL",
      "required":true,
      "type":"text",
    },
    'repoContext':{
      "displayName" : "Repo Context",
      "required":true,
      "type":"text",
    },
    'modelTemplate':{
      "displayName" : "Model Template",
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
