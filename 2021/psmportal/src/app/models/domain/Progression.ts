// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const id = faker.datatype.number(99999);

export class Progression {
  ID?: number =  id;
  PersonID?: string | null = 'u12122212';
  TaskID?: string | null = 't1112';
  CompletionStatus?: boolean = false;
  TaskAssesment?: string | null = 'Math';
  RPAGRated?: boolean = true;
  Comment?: string | null = "Well Done"
}

