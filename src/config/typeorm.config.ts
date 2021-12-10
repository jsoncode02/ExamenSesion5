import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'sesion3',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true
}