import { Entity } from "src/app/config/entity";

export class DeleteDialog {
  entity: Entity;
  id: number;

  constructor(entity: Entity, id: number) {
    this.entity = entity;
    this.id = id;
  }
}
