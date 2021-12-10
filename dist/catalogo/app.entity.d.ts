import { BaseEntity } from "typeorm";
export declare class appEntity extends BaseEntity {
    _id: string;
    nombreProduc: string;
    descripcio: string;
    LugarCompra: string[];
    fechaCreacion: Date;
}
