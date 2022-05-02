import { Type } from '@nestjs/common';
declare const AppUtils: {
    DtoFactory: {
        wrap<T>(responseDto: T): Type<unknown>;
    };
};
export default AppUtils;
