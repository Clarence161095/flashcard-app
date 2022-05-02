"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseUtils {
    success(collectionName, data, options) {
        return {
            collectionName,
            data,
            options,
        };
    }
}
exports.default = new ResponseUtils();
//# sourceMappingURL=response.utils.js.map