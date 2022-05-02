"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDefineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_define_dto_1 = require("./create-define.dto");
class UpdateDefineDto extends (0, mapped_types_1.PartialType)(create_define_dto_1.CreateDefineDto) {
}
exports.UpdateDefineDto = UpdateDefineDto;
//# sourceMappingURL=update-define.dto.js.map