"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'sesion3',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true
};
//# sourceMappingURL=typeorm.config.js.map