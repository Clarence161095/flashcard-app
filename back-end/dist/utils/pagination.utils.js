"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_constants_1 = __importDefault(require("../constants/common.constants"));
class PaginationUtils {
    static buildLink(location, paginationParams) {
        if (!process.env.SERVER_HOST) {
            throw new Error('SERVER_HOST parameter did not provide in env');
        }
        let url = `${process.env.SERVER_HOST}/${location}?`;
        let count = 0;
        if (paginationParams) {
            if (paginationParams.page) {
                url += `page=${paginationParams.page}`;
                count += 1;
            }
            if (paginationParams.limit) {
                if (count > 0) {
                    url += '&';
                }
                url += `limit=${paginationParams.limit}`;
            }
        }
        return url;
    }
    static normalizeParam(param) {
        if (param) {
            const tmp = parseInt(param, 10);
            if (isNaN(tmp))
                return false;
            if (tmp <= 0)
                return false;
            return tmp;
        }
        return false;
    }
    normalizeParams(params) {
        const ret = { page: 1 };
        if (!params) {
            return ret;
        }
        const page = PaginationUtils.normalizeParam(params.number);
        if (page) {
            ret.page = page;
        }
        const limit = PaginationUtils.normalizeParam(params.limit);
        if (limit) {
            ret.limit = limit;
        }
        const size = PaginationUtils.normalizeParam(params.size);
        if (size) {
            ret.limit = size;
        }
        return ret;
    }
    getPaginationLinks(location, paginationParams, totalCount) {
        const pageMax = Math.floor(totalCount / (paginationParams.limit ? paginationParams.limit : common_constants_1.default.pagination.defaultLimit)) + 1;
        return {
            self: PaginationUtils.buildLink(location, paginationParams),
            first: PaginationUtils.buildLink(location, { page: 1, limit: paginationParams.limit }),
            last: PaginationUtils.buildLink(location, { page: pageMax, limit: paginationParams.limit }),
            next: PaginationUtils.buildLink(location, {
                page: paginationParams.page === pageMax ? pageMax : paginationParams.page + 1,
                limit: paginationParams.limit,
            }),
            prev: PaginationUtils.buildLink(location, {
                page: paginationParams.page === 1 ? 1 : paginationParams.page - 1,
                limit: paginationParams.limit,
            }),
        };
    }
    getSkipCount(page, limit) {
        let skip = 0;
        if (page) {
            skip = page - 1;
            if (limit) {
                skip *= limit;
            }
            else {
                skip *= common_constants_1.default.pagination.defaultLimit;
            }
        }
        return skip;
    }
    getLimitCount(limit) {
        let limitPerPage = common_constants_1.default.pagination.defaultLimit;
        if (limit) {
            limitPerPage = limit;
        }
        return limitPerPage;
    }
}
exports.default = new PaginationUtils();
//# sourceMappingURL=pagination.utils.js.map