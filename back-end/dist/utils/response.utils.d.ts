import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
declare class ResponseUtils {
    success(collectionName: string, data: any, options?: {
        location: string;
        paginationParams: PaginationParamsInterface;
        totalCount: number;
    }): {
        collectionName: string;
        data: any;
        options: {
            location: string;
            paginationParams: PaginationParamsInterface;
            totalCount: number;
        } | undefined;
    };
}
declare const _default: ResponseUtils;
export default _default;
