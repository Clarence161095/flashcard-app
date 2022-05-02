"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
require("module-alias/register");
const all_exceptions_filter_1 = __importDefault(require("./filters/all-exceptions.filter"));
const app_module_1 = __importDefault(require("./interfaces/app/app.module"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.default);
    app.enableCors();
    app.use((0, helmet_1.default)());
    const configService = app.get(config_1.ConfigService);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new all_exceptions_filter_1.default());
    const port = configService.get('SERVER_PORT') || 3000;
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Api v1')
        .setDescription('The boilerplate API for nestjs devs')
        .setVersion('1.0')
        .addBearerAuth({ in: 'header', type: 'http' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port, async () => {
        console.log(`The server is running on ${port} port: http://localhost:${port}/api`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map