export interface Address {
  zipCode: string;
  streetAddress: string;
  streetNumber: string;
  complement?: string;
  referencePoint?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}
