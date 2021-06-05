import { Sektor } from "src/app/sektor/models/sektor.model";

export interface Preduzece {
  id: number;
  naziv: string;
  opis: string;
  pib: number;
  sediste: string;
  sektori?: Sektor[];
}
