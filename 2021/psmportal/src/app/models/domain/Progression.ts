// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Progression {
  id?: number =  id;
  personId?: string | null = 'u12122212';
  taskId?: string | null = 't1112';
  completionStatus?: boolean = false;
  taskAssesment?: string | null = 'Math';
  RPAGrated?: boolean = true;
  comment?: string | null = "Well Done"
}

