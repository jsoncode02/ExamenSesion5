"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogoAvonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_entity_1 = require("./app.entity");
const reporsitoryCatalogo_1 = require("./reporsitoryCatalogo");
let ServiceCatalogoAvonService = class ServiceCatalogoAvonService {
    constructor(repository) {
        this.repository = repository;
        this.logger = new common_1.Logger('ServiceCatalogoAvonService');
    }
    async obtenerTodo() {
        console.log('Obtener todos los articulos');
        let response = this.repository.find({});
        return await response;
    }
    obtenerUnArticulo(id) {
        console.log(id);
        return 'Obtiene el articulo ' + id;
    }
    agregarUnArticulo(data) {
        console.log(data);
        return 'agregado';
    }
    editarUnArticulo(id, data) {
        console.log(data);
        return 'editado';
    }
    eliminarUnArticulo(id) {
        console.log(id);
        return 'eliminado';
    }
};
ServiceCatalogoAvonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reporsitoryCatalogo_1.repositoryCatalogoAvon)),
    __metadata("design:paramtypes", [reporsitoryCatalogo_1.repositoryCatalogoAvon])
], ServiceCatalogoAvonService);
exports.ServiceCatalogoAvonService = ServiceCatalogoAvonService;
//# sourceMappingURL=service-catalogo-avon.service.js.map