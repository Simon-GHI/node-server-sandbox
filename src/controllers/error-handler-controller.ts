import { NextFunction, Request, Response } from 'express';
// Application
import { HttpErrorResponse } from '@application/error/http-error.js';
import { NotFoundError } from '@application/error/not-found-error.js';
import { IllegalArgumentError } from '@application/error/illegal-argument-error.js';

export const errorHandler = (
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('An error occurred during HTTP call.', error);
  const httpError: HttpErrorResponse = getHttpError(error);
  res.status(httpError.status).json(httpError);
  next();
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const httpError: HttpErrorResponse = {
    status: 404,
    message: `Ressource not found for URL: ${req.originalUrl}`,
  };
  res.status(httpError.status).json(httpError);
  next();
};

function getHttpError(error: Error): HttpErrorResponse {
  if (error instanceof NotFoundError) {
    return {
      status: 404,
      message: error.message,
    };
  }
  if (error instanceof IllegalArgumentError) {
    return {
      status: 400,
      message: error.message,
    };
  }

  return {
    status: 500,
    message: error.message,
  };
}
