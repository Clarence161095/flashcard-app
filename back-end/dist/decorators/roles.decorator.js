"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.RolesEnum = void 0;
const common_1 = require("@nestjs/common");
var RolesEnum;
(function (RolesEnum) {
    RolesEnum["admin"] = "admin";
    RolesEnum["user"] = "user";
})(RolesEnum = exports.RolesEnum || (exports.RolesEnum = {}));
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map