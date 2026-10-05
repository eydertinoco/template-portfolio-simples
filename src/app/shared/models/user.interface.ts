import {Address} from "./address.interface";
import {Phone} from "./phone.interface";

export interface User {
  email: string;
  name: string;
  gender: string;
  phones?: Phone[];
  address?: Address;
}
