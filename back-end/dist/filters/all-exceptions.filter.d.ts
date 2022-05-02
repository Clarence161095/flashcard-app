import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
export default class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): ExpressResponse<any, Record<string, any>>;
}
