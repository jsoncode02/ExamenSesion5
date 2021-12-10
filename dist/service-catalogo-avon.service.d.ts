import { appEntity } from 'src/app.entity';
import { repositoryCatalogoAvon } from 'src/reporsitoryCatalogo';
export declare class ServiceCatalogoAvonService {
    private repository;
    private logger;
    constructor(repository: repositoryCatalogoAvon);
    obtenerTodo(): Promise<appEntity[]>;
    obtenerUnArticulo(id: string): string;
    agregarUnArticulo(data: object): string;
    editarUnArticulo(id: string, data: object): string;
    eliminarUnArticulo(id: string): string;
}
