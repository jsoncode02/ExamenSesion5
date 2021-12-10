"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reporsitoryCatalogo_1 = require("./reporsitoryCatalogo");
const controller_catalogo_avon_controller_1 = require("./controller-catalogo-avon.controller");
const service_catalogo_avon_service_1 = require("./service-catalogo-avon.service");
let CatalogoModule = class CatalogoModule {
};
CatalogoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([reporsitoryCatalogo_1.repositoryCatalogoAvon])
        ],
        controllers: [controller_catalogo_avon_controller_1.ControllerCatalogoAvonController],
        providers: [service_catalogo_avon_service_1.ServiceCatalogoAvonService]
    })
], CatalogoModule);
exports.CatalogoModule = CatalogoModule;
//# sourceMappingURL=catalogo.module.js.map