"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.requestRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 3 * 1000,
    max: 3,
    message: 'You have exceeded the 3 requests in 60 second limit!',
    standardHeaders: true,
    legacyHeaders: false,
});
