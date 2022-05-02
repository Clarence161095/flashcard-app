"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_set_dto_1 = require("./create-set.dto");
class UpdateSetDto extends (0, mapped_types_1.PartialType)(create_set_dto_1.CreateSetDto) {
}
exports.UpdateSetDto = UpdateSetDto;
//# sourceMappingURL=update-set.dto.js.map