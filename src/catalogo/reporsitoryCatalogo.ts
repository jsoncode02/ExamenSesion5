import { Repository, EntityRepository, MongoRepository } from "typeorm";
import { InternalServerErrorException,Logger} from "@nestjs/common";
import { appEntity } from "./app.entity";
import { ArticuloDTO } from "../dtos/articulo.dtos";

@EntityRepository(appEntity)
export class repositoryCatalogoAvon extends MongoRepository<appEntity>{
    async createArticulo(data: ArticuloDTO){
        const {nombreProduc,descripcio,LugarCompra,fechaCreacion} = data;
        const articulo = new appEntity();
        articulo.nombreProduc = nombreProduc;
        articulo.descripcio = descripcio;
        articulo.LugarCompra = LugarCompra;
        articulo.fechaCreacion = fechaCreacion;
        return await articulo.save();
    }
}