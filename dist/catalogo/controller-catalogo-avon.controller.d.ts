import { ServiceCatalogoAvonService } from 'src/catalogo/service-catalogo-avon.service';
import { ArticuloDTO } from 'src/dtos/articulo.dtos';
export declare class ControllerCatalogoAvonController {
    private ServiceCatalogoAvonService;
    private logger;
    constructor(ServiceCatalogoAvonService: ServiceCatalogoAvonService);
    obtenerTodo(): Promise<import("./app.entity").appEntity[]>;
    obtenerUnArticulo(id: string): string;
    agregarUnArticulo(data: ArticuloDTO): string;
    editar(id: string, data: ArticuloDTO): string;
    eliminar(id: string): string;
}
