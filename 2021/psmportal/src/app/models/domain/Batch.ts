// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Batch {
  id?: number =  id;
  batchCode?: string =`'b10${id.toString().padEnd(5,'0')}`;
  term1StartDate?: Date | string = '2021-01-01';
  term2StartDate?: Date | string = '2021-08-01';
  midtermDate?: Date | string = '2021-05-05';
  endtermDate?: Date | string = '2021-10-21';
  endBatchDate?: Date | string = '2021-10-21';
  isActive?: boolean = true;
} 
