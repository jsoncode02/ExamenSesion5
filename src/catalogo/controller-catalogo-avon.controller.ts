import { Body, Controller, Delete, Logger, Patch, Post, UsePipes } from '@nestjs/common';
import {Get, Param } from '@nestjs/common';
import {ServiceCatalogoAvonService} from 'src/catalogo/service-catalogo-avon.service'
import { ValidationPipe } from '@nestjs/common';
import { ArticuloDTO } from 'src/dtos/articulo.dtos';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiNotFoundResponse, ApiBody } from '@nestjs/swagger';

@ApiTags()
@Controller('catalogo')
export class ControllerCatalogoAvonController {

    private logger = new Logger('ControllerCatalogoAvonController');

    constructor(private ServiceCatalogoAvonService: ServiceCatalogoAvonService){}

    @Get()
    @ApiOperation({ summary: 'Devuelve todo' })
    @ApiResponse({ status: 200, type: Object })
    async obtenerTodo(){
    return await this.ServiceCatalogoAvonService.obtenerTodo();
    }

    @Get('/:id')
    @ApiQuery({ name: 'articuloid', type: Object })
    @ApiParam({ name: 'articuloid' })
    @ApiNotFoundResponse({ description: 'No se encuentra el articulo' })
    obtenerUnArticulo(@Param('id') id:string){
        return this.ServiceCatalogoAvonService.obtenerUnArticulo(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ required: true, type: ArticuloDTO })
    agregarUnArticulo(@Body() data:ArticuloDTO){
        return this.ServiceCatalogoAvonService.agregarUnArticulo(data);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Se edita el producto' })
    editar(@Param('id') id:string, @Body() data:ArticuloDTO){
        return this.ServiceCatalogoAvonService.editarUnArticulo(id, data);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Se elimina el producto' })
    eliminar(@Param('id') id:string){
        return this.ServiceCatalogoAvonService.eliminarUnArticulo(id);
    }
}
