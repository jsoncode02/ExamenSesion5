import { repositoryCatalogoAvon } from 'src/catalogo/reporsitoryCatalogo';
export declare class ServiceCatalogoAvonService {
    private repository;
    private logger;
    constructor(repository: repositoryCatalogoAvon);
    obtenerTodo(): Promise<import("./app.entity").appEntity[]>;
    obtenerUnArticulo(id: string): string;
    agregarUnArticulo(data: object): string;
    editarUnArticulo(id: string, data: object): string;
    eliminarUnArticulo(id: string): string;
}
