const express = require('express');

class ForceJsonResponseMiddleware {
  async handle(req, res, next) {
    req.headers.accept = 'application/json';

    return next();
  }
}

module.exports = ForceJsonResponseMiddleware;


/*import { Request, Response, NextFunction } from 'express';

class ForceJsonResponseMiddleware {
  async handle(req: Request, res: Response, next: NextFunction) {
    req.headers.accept = 'application/json';

    return next();
  }
}

export default ForceJsonResponseMiddleware;*/