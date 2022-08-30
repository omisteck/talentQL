import rateLimit from 'express-rate-limit';

export const requestRateLimiter = rateLimit({
    windowMs: 3 * 1000, // 24 hrs in milliseconds
    max: 3,
    message: 'You have exceeded the 3 requests in 3 second limit!',
    standardHeaders: true,
    legacyHeaders: false,
});