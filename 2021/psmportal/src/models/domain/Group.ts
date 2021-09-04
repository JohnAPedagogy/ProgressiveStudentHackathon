// import {FakerTypeName} from "../../services/repository/utilities/seed"
import * as faker from "faker";

const uid = faker.datatype.number(19);

export class Group {
  id?: number =  uid;
  GroupCode?: string='Group'+uid;
  P2PCoach?: string = 'faker.email.'
  TaughtTerm?: string | null=`s20${uid.toString().padEnd(5,'0')}`;
}
