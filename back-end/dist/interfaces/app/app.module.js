"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const typeorm_1 = require("@nestjs/typeorm");
const v1_module_1 = __importDefault(require("../../modules/v1/v1.module"));
const nest_morgan_1 = require("nest-morgan");
const app_controller_1 = __importDefault(require("./app.controller"));
const app_service_1 = __importDefault(require("./app.service"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (cfg) => ({
                    type: 'postgres',
                    host: cfg.get('POSTGRESQL_HOST') || 'postgres',
                    port: cfg.get('POSTGRESQL_PORT'),
                    database: cfg.get('POSTGRESQL_DB'),
                    username: cfg.get('POSTGRESQL_ROOT_USER'),
                    password: cfg.get('POSTGRESQL_PASSWORD'),
                    entities: ['dist/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            nestjs_redis_1.RedisModule.forRootAsync({
                useFactory: (cfg) => ({
                    config: {
                        url: cfg.get('REDIS_URL'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            v1_module_1.default,
            nest_morgan_1.MorganModule
        ],
        controllers: [app_controller_1.default],
        providers: [app_service_1.default, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: (0, nest_morgan_1.MorganInterceptor)("tiny"),
            }],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map