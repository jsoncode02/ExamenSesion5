import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { repositoryCatalogoAvon } from 'src/catalogo/reporsitoryCatalogo';
import { ArticuloDTO } from 'src/dtos/articulo.dtos';

@Injectable()
export class ServiceCatalogoAvonService {

    private logger = new Logger('ServiceCatalogoAvonService');

    constructor(@InjectRepository(repositoryCatalogoAvon)
                private repository : repositoryCatalogoAvon){}

    
    async obtenerTodo(){
        console.log('Obtener todos los articulos')
        let response = this.repository.find({});
        return await response;
    }

    async obtenerUnArticulo(id:string){
        console.log(id)
        let response = this.repository.find({where: {_id: id}});
        return response;
    }

    async agregarUnArticulo(data: ArticuloDTO){
        console.log(data);
        const nuevo = await this.repository.createArticulo(data);
        return nuevo;
    }

    async editarUnArticulo(id:string, data:object){
        console.log(data);
        const edita = await this.repository.updateOne({ _id: id }, {$set: data});
        return edita;
    }

    async eliminarUnArticulo(id:string){
        console.log(id);
        const eliminar = await this.repository.delete({_id: id});
        return eliminar;
    }
}
