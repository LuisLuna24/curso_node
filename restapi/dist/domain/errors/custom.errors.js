"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode, message, debugMessage) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.debugMessage = debugMessage;
    }
    static badRequest(message) {
        return new CustomError(400, message);
    }
    static unauthorized(message) {
        return new CustomError(401, message);
    }
    static forbidden(message) {
        return new CustomError(403, message);
    }
    static notFound(message) {
        return new CustomError(404, message);
    }
    static internalServerError(message = "Internal Server Error") {
        return new CustomError(500, message);
    }
}
exports.CustomError = CustomError;
