import {Equipement} from "./equipement";

export interface offer {
idOffer: number;
dateCreation:Date;
  descriptionOffer:string;
  quantity:number;
  archive:boolean;
  equipment:Equipement[];
}
