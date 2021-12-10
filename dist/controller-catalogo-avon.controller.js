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
exports.ControllerCatalogoAvonController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const service_catalogo_avon_service_1 = require("./service-catalogo-avon.service");
const common_3 = require("@nestjs/common");
const articulo_dtos_1 = require("./dtos/articulo.dtos");
const swagger_1 = require("@nestjs/swagger");
let ControllerCatalogoAvonController = class ControllerCatalogoAvonController {
    constructor(ServiceCatalogoAvonService) {
        this.ServiceCatalogoAvonService = ServiceCatalogoAvonService;
        this.logger = new common_1.Logger('ControllerCatalogoAvonController');
    }
    async obtenerTodo() {
        return await this.ServiceCatalogoAvonService.obtenerTodo();
    }
    obtenerUnArticulo(id) {
        return this.ServiceCatalogoAvonService.obtenerUnArticulo(id);
    }
    agregarUnArticulo(data) {
        return this.ServiceCatalogoAvonService.agregarUnArticulo(data);
    }
    editar(id, data) {
        return this.ServiceCatalogoAvonService.editarUnArticulo(id, data);
    }
    eliminar(id) {
        return this.ServiceCatalogoAvonService.eliminarUnArticulo(id);
    }
};
__decorate([
    (0, common_2.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Devuelve solamente el nombre y el id del postulante' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControllerCatalogoAvonController.prototype, "obtenerTodo", null);
__decorate([
    (0, common_2.Get)('/:id'),
    (0, swagger_1.ApiQuery)({ name: 'articuloid', type: Object }),
    (0, swagger_1.ApiParam)({ name: 'articuloid' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No se encuentra el articulo' }),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ControllerCatalogoAvonController.prototype, "obtenerUnArticulo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_3.ValidationPipe),
    (0, swagger_1.ApiBody)({ required: true, type: articulo_dtos_1.ArticuloDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articulo_dtos_1.ArticuloDTO]),
    __metadata("design:returntype", void 0)
], ControllerCatalogoAvonController.prototype, "agregarUnArticulo", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UsePipes)(common_3.ValidationPipe),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, articulo_dtos_1.ArticuloDTO]),
    __metadata("design:returntype", void 0)
], ControllerCatalogoAvonController.prototype, "editar", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ControllerCatalogoAvonController.prototype, "eliminar", null);
ControllerCatalogoAvonController = __decorate([
    (0, swagger_1.ApiTags)(),
    (0, common_1.Controller)('controller-catalogo-avon'),
    __metadata("design:paramtypes", [service_catalogo_avon_service_1.ServiceCatalogoAvonService])
], ControllerCatalogoAvonController);
exports.ControllerCatalogoAvonController = ControllerCatalogoAvonController;
//# sourceMappingURL=controller-catalogo-avon.controller.js.map