import { MongoRepository } from "typeorm";
import { appEntity } from "./app.entity";
import { ArticuloDTO } from "./dtos/articulo.dtos";
export declare class repositoryCatalogoAvon extends MongoRepository<appEntity> {
    createArticulo(data: ArticuloDTO): Promise<appEntity>;
}
