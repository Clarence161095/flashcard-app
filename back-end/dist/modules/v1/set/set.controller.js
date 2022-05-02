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
exports.SetController = void 0;
const common_1 = require("@nestjs/common");
const create_set_dto_1 = require("./dto/create-set.dto");
const update_set_dto_1 = require("./dto/update-set.dto");
const set_service_1 = require("./set.service");
let SetController = class SetController {
    constructor(setService) {
        this.setService = setService;
    }
    create(createSetDto) {
        return this.setService.create(createSetDto);
    }
    findAll() {
        return this.setService.findAll();
    }
    findOne(id) {
        return this.setService.findOne(+id);
    }
    update(id, updateSetDto) {
        return this.setService.update(+id, updateSetDto);
    }
    remove(id) {
        return this.setService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_set_dto_1.CreateSetDto]),
    __metadata("design:returntype", void 0)
], SetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_set_dto_1.UpdateSetDto]),
    __metadata("design:returntype", void 0)
], SetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetController.prototype, "remove", null);
SetController = __decorate([
    (0, common_1.Controller)('set'),
    __metadata("design:paramtypes", [set_service_1.SetService])
], SetController);
exports.SetController = SetController;
//# sourceMappingURL=set.controller.js.map