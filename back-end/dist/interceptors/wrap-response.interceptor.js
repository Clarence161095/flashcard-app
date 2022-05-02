"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jsonapi_serializer_1 = require("jsonapi-serializer");
const _ = __importStar(require("lodash"));
const operators_1 = require("rxjs/operators");
const pagination_utils_1 = __importDefault(require("../utils/pagination.utils"));
let WrapResponseInterceptor = class WrapResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((...args) => {
            var _a;
            const serializeOptions = {};
            const { data, options, collectionName } = args[0];
            if (data && collectionName) {
                if (data.length) {
                    serializeOptions.attributes = Object.keys(_.omit(data[0], ['_id', 'id']));
                    data.forEach((item) => {
                        item.id = item._id;
                        delete item._id;
                    });
                }
                else {
                    serializeOptions.attributes = Object.keys(_.omit(data, ['_id', 'id']));
                }
                if (options) {
                    serializeOptions.topLevelLinks = pagination_utils_1.default.getPaginationLinks(options.location, options.paginationParams, options.totalCount);
                    serializeOptions.meta = { totalCount: options.totalCount };
                }
                return new jsonapi_serializer_1.Serializer(collectionName, serializeOptions).serialize(data);
            }
            return {
                data: (_a = args[0].data) !== null && _a !== void 0 ? _a : args[0],
            };
        }));
    }
};
WrapResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], WrapResponseInterceptor);
exports.default = WrapResponseInterceptor;
//# sourceMappingURL=wrap-response.interceptor.js.map