import {PetIllness} from "./pet-illness.interface";
import {User} from "../../../shared/models/user.interface";

export interface UserPet {
  id: string;
  petPhoto: string;
  petName: string;
  petAge: string;
  petDescription: string;
  petIllness: PetIllness[];
  owner: User;
}
