import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { repositoryCatalogoAvon } from './catalogo/reporsitoryCatalogo';
import { CatalogoModule } from './catalogo/catalogo.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
            CatalogoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
