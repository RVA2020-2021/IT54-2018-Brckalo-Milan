import { Preduzece } from "src/app/preduzece/models/preduzece.model";
import { Radnik } from "src/app/radnik/models/radnik.model";

export interface Sektor {
  id: number;
  naziv: string;
  oznaka: string;
  preduzece?: Preduzece;
  radnici?: Radnik[];
}
