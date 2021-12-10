import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';

export class ArticuloDTO{

    @IsString()
    @IsNotEmpty()
    nombreProduc: string;
   
    @IsString()
    @IsNotEmpty()
    descripcio: string;
   
    @IsOptional()
    LugarCompra: any;
  
    @IsNotEmpty()
    fechaCreacion: Date;
}