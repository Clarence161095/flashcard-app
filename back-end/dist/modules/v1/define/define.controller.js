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
exports.DefineController = void 0;
const common_1 = require("@nestjs/common");
const define_service_1 = require("./define.service");
const create_define_dto_1 = require("./dto/create-define.dto");
const update_define_dto_1 = require("./dto/update-define.dto");
let DefineController = class DefineController {
    constructor(defineService) {
        this.defineService = defineService;
    }
    create(createDefineDto) {
        return this.defineService.create(createDefineDto);
    }
    findAll() {
        return this.defineService.findAll();
    }
    findOne(id) {
        return this.defineService.findOne(+id);
    }
    update(id, updateDefineDto) {
        return this.defineService.update(+id, updateDefineDto);
    }
    remove(id) {
        return this.defineService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_define_dto_1.CreateDefineDto]),
    __metadata("design:returntype", void 0)
], DefineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DefineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DefineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_define_dto_1.UpdateDefineDto]),
    __metadata("design:returntype", void 0)
], DefineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DefineController.prototype, "remove", null);
DefineController = __decorate([
    (0, common_1.Controller)('define'),
    __metadata("design:paramtypes", [define_service_1.DefineService])
], DefineController);
exports.DefineController = DefineController;
//# sourceMappingURL=define.controller.js.map