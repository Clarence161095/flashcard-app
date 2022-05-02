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
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Set = class Set extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Set.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)({ nullable: false, type: String }),
    __metadata("design:type", String)
], Set.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)({ nullable: false, type: String }),
    __metadata("design:type", String)
], Set.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], Set.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Set.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Set.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Set.prototype, "deletedDate", void 0);
Set = __decorate([
    (0, typeorm_1.Entity)()
], Set);
exports.default = Set;
//# sourceMappingURL=set.entity.js.map