import {offer} from "./offer";

export interface Equipement {
  idEquipment:number;
  name:string;
  description:string;
  dateManufacture:Date;

  dateEndUsefullLife:Date;
  quantity:number;
  favorite:boolean;
  offer:offer[];
}
