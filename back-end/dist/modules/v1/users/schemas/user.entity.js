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
const roles_decorator_1 = require("../../../../decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
    constructor() {
        this.id = '';
        this.password = '';
        this.email = '';
        this.verified = false;
        this.role = roles_decorator_1.RolesEnum.user;
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, maxLength: 64 }),
    (0, typeorm_1.Column)({ length: 64 }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, maxLength: 64 }),
    (0, typeorm_1.Column)({ length: 64 }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, default: roles_decorator_1.RolesEnum.user, enum: roles_decorator_1.RolesEnum }),
    (0, typeorm_1.Column)({ type: 'enum', enum: roles_decorator_1.RolesEnum, default: roles_decorator_1.RolesEnum.user }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.default = UserEntity;
//# sourceMappingURL=user.entity.js.map