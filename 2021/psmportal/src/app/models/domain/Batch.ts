// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Batch {
  ID?: number =  id;
  BatchCode?: string =`'b10${id.toString().padEnd(5,'0')}`;
  Term1StartDate?: Date | string = '2021-01-01';
  Term2StartDate?: Date | string = '2021-08-01';
  MidTermDate?: Date | string = '2021-05-05';
  EndTermDate?: Date | string = '2021-10-21';
  EndBatchDate?: Date | string = '2021-10-21';
  IsActive?: boolean = true;
} 
