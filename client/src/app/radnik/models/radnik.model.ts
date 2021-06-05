import { Obrazovanje } from "src/app/obrazovanje/models/obrazovanje.model";
import { Sektor } from "src/app/sektor/models/sektor.model";

export interface Radnik {
  id: number;
  brojLk: number;
  ime: string;
  prezime: string;
  obrazovanje?: Obrazovanje;
  sektor?: Sektor;
}
