// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(99999);

export class Resource {
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
