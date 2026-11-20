
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth';
import { UnauthorizedError } from '../utils/apperrors';
export const authenticateKey = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        res.status(401).json({
            status: 'fail',
            message: 'Unauthorized: Missing or invalid api-key header'
        });

        return;
    }

    next();
};
const authService = new AuthService();

export const authenticateJWT = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedError('Missing or invalid token');
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = authService.verifyToken(token);
        res.locals.user = payload;
        next();
    } catch {
        throw new UnauthorizedError('Invalid or expired token');
    }
};
