import type { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { validateAccessToken } from "../lib/utils/auth";
import { UnauthorizedError } from "../errors/unauthorized-error";

// UserPayload type extends JwtPayload with the userId property
export type UserPayload = JwtPayload & { userId: string; isAdmin: boolean };

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.header("Authorization");
  let token;
  if (auth) {
    token = auth?.split(" ")[1];
  } else {
    // get access token from req.headers.cookie
    const cookies = req.headers.cookie?.split("; ");
    if (cookies) {
      const accessToken = cookies.find((c) => c.startsWith("accessToken"));
      token = accessToken?.split("=")[1];
    }
  }
  if (!token || !validateAccessToken(token)) {
    throw new UnauthorizedError("Not authorized");
  }

  // Verify the token's expiration date
  const decoded = jwt.decode(token) as JwtPayload;
  const tokenExpiration = decoded?.exp || 0;
  const currentTime = Math.floor(Date.now() / 1000);

  // If the token is about to expire, send a response indicating the need for a refresh
  if (tokenExpiration - currentTime < 60) {
    throw new UnauthorizedError("Token expired");
  }
  // set req.user
  req.user = decoded as UserPayload;

  // Token is valid, continue to the next middleware/route handler
  next();
};
