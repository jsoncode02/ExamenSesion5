"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryCatalogoAvon = void 0;
const typeorm_1 = require("typeorm");
const app_entity_1 = require("./app.entity");
let repositoryCatalogoAvon = class repositoryCatalogoAvon extends typeorm_1.MongoRepository {
    async createArticulo(data) {
        const { item, precio, descripcion, LugarCompra, fechaCompra } = data;
        const articulo = new app_entity_1.appEntity();
        articulo.item = item;
        articulo.descripcion = descripcion;
        articulo.fechaCompra = fechaCompra;
        articulo.precio = precio;
        articulo.LugarCompra = LugarCompra;
        return await articulo.save();
    }
};
repositoryCatalogoAvon = __decorate([
    (0, typeorm_1.EntityRepository)(app_entity_1.appEntity)
], repositoryCatalogoAvon);
exports.repositoryCatalogoAvon = repositoryCatalogoAvon;
//# sourceMappingURL=reporsitoryCatalogo.js.map