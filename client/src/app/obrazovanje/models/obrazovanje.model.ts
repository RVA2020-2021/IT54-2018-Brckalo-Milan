import { Radnik } from "src/app/radnik/models/radnik.model";

export interface Obrazovanje {
  id: number;
  naziv: string;
  opis: string;
  stepenStrucneSpreme: string;
  radnici?: Radnik[];
}
