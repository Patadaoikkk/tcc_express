const express = require('express');
const CreateUserUseCase = require('../../Application/user/create-user.usecase');

class UserController {
  static async create(req, res, createUserUseCase) {
    const payload = req.body;

    try {
      await createUserUseCase.execute(payload);
      return res.status(201).json({ message: 'User created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  }
}

module.exports = UserController;



/*import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../Application/user/create-user.usecase.js';

class UserController {
  static async create(req: Request, res: Response, createUserUseCase: CreateUserUseCase) {
    const payload = req.body;

    try {
      await createUserUseCase.execute(payload);
      return res.status(201).json({ message: 'User created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  }
}

export default UserController;*/