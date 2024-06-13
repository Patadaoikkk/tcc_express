const express = require('express');
const authenticator = require('./authenticator'); // assume you have an authenticator function

class AuthController {
  static async auth(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    const result = await authenticator(email, password);

    if (!result) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    return res.status(200).json({
      body: {
        token: result.token,
      },
      message: 'User authenticated'
    });
  }
}

module.exports = AuthController;


/*import { Request, Response } from 'express';
import { authenticate } from './authenticator'; // assume you have an authenticator function

class AuthController {
  static async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    const result = await authenticate(email, password);

    if (!result) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    return res.status(200).json({
      body: {
        token: result.token,
      },
      message: 'User authenticated'
    });
  }
}

export default AuthController;*/