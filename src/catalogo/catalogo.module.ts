import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repositoryCatalogoAvon } from './reporsitoryCatalogo';
import { ControllerCatalogoAvonController } from './controller-catalogo-avon.controller';
import { ServiceCatalogoAvonService } from './service-catalogo-avon.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([repositoryCatalogoAvon])
  ],
  controllers: [ControllerCatalogoAvonController],
  providers: [ServiceCatalogoAvonService]
})
export class CatalogoModule {}