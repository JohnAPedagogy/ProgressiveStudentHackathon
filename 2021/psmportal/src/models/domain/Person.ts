import {FakerTypeName} from "../../services/repository/utilities/seed"


export class Person {
  public id!: number;
  public groupId!: number;
  public uniCode!: string;
  public sgCode!: string | null;
  @FakerTypeName()  public lastName!: string;
  public otherNames!: string;
  public startDate!: Date | string;
}
