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
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEntity = void 0;
const typeorm_1 = require("typeorm");
let appEntity = class appEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], appEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], appEntity.prototype, "nombreProduc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], appEntity.prototype, "descripcio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], appEntity.prototype, "LugarCompra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], appEntity.prototype, "fechaCreacion", void 0);
appEntity = __decorate([
    (0, typeorm_1.Entity)()
], appEntity);
exports.appEntity = appEntity;
//# sourceMappingURL=app.entity.js.map