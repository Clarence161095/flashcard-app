import { PaginationParamsInterface } from '@interfaces/pagination-params.interface';
declare class PaginationUtils {
    private static buildLink;
    private static normalizeParam;
    normalizeParams(params: {
        number?: string;
        limit?: string;
        size?: string;
    }): PaginationParamsInterface | false;
    getPaginationLinks(location: string, paginationParams: PaginationParamsInterface, totalCount: number): any;
    getSkipCount(page?: number, limit?: number): number;
    getLimitCount(limit?: number): number;
}
declare const _default: PaginationUtils;
export default _default;
