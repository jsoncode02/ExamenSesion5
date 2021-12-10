import { BaseEntity, Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class appEntity extends BaseEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    nombreProduc: string;
    @Column()
    descripcio: string;
    @Column()
    LugarCompra: string[];
    @Column()
    fechaCreacion: Date;
}