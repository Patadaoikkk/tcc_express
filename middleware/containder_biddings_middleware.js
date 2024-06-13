const express = require('express');
const { Logger } = require('winston'); // or any other logging library

class ContainerBindingsMiddleware {
  handle(req, res, next) {
    // Create a logger instance
    const logger = new Logger();

    // Bind the logger to the request object
    req.logger = logger;

    // Continue to the next middleware
    return next();
  }
}

module.exports = ContainerBindingsMiddleware;



/*import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston'; // or any other logging library

class ContainerBindingsMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {
    // Create a logger instance
    const logger = new Logger();

    // Bind the logger to the request object
    req.logger = logger;

    // Continue to the next middleware
    return next();
  }
}

export default ContainerBindingsMiddleware;*/