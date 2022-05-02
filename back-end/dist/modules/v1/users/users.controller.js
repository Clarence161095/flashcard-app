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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_decorator_1 = require("../../../decorators/roles.decorator");
const serialization_decorator_1 = __importDefault(require("../../../decorators/serialization.decorator"));
const jwt_access_guard_1 = __importDefault(require("../../../guards/jwt-access.guard"));
const wrap_response_interceptor_1 = __importDefault(require("../../../interceptors/wrap-response.interceptor"));
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const user_response_entity_1 = require("./entities/user-response.entity");
const pagination_utils_1 = __importDefault(require("../../../utils/pagination.utils"));
const response_utils_1 = __importDefault(require("../../../utils/response.utils"));
const user_entity_1 = __importDefault(require("./schemas/user.entity"));
const users_service_1 = __importDefault(require("./users.service"));
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getById(id) {
        const foundUser = await this.usersService.getVerifiedUserById(id);
        if (!foundUser) {
            throw new common_1.NotFoundException('The user does not exist');
        }
        return response_utils_1.default.success('users', foundUser);
    }
    async getAllVerifiedUsers(query) {
        const paginationParams = pagination_utils_1.default.normalizeParams(query.page);
        if (!paginationParams) {
            throw new common_1.BadRequestException('Invalid pagination parameters');
        }
        const paginatedUsers = await this.usersService.getAllVerifiedWithPagination(paginationParams);
        return response_utils_1.default.success('users', paginatedUsers.paginatedResult, {
            location: 'users',
            paginationParams,
            totalCount: paginatedUsers.totalCount,
        });
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        schema: {
            type: 'object',
            properties: {
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(user_entity_1.default),
                },
            },
        },
        description: '200. Success. Returns a user',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '404. NotFoundException. User was not found',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        schema: {
            type: 'object',
            example: {
                message: 'string',
            },
        },
        description: '401. UnauthorizedException.',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_access_guard_1.default),
    (0, serialization_decorator_1.default)(user_response_entity_1.AllUsersResponseEntity),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        schema: {
            type: 'object',
            properties: {
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(user_entity_1.default),
                },
            },
        },
        description: '200. Success. Returns all users',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        schema: {
            type: 'object',
            example: {
                message: 'string',
            },
        },
        description: '401. UnauthorizedException.',
    }),
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_decorator_1.RolesEnum.admin),
    (0, common_1.UseGuards)(jwt_access_guard_1.default),
    (0, serialization_decorator_1.default)(user_response_entity_1.AllUsersResponseEntity),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllVerifiedUsers", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)(wrap_response_interceptor_1.default),
    (0, swagger_1.ApiExtraModels)(user_entity_1.default),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [users_service_1.default])
], UsersController);
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map