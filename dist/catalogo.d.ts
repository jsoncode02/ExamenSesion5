import { BaseEntity } from "typeorm";
export declare class catalogoAvon extends BaseEntity {
    _id: string;
    item: string;
    precio: number;
    descripcion: string;
    LugarCompra: string;
    fechaCompra: Date;
}
