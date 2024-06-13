const express = require('express');

class PsychController {
  static async create(req, res, createPsychUseCase) {
    const payload = req.body;

    await createPsychUseCase.execute(payload);

    return res.status(201).json({ message: 'Psych created' });
  }
}

module.exports = PsychController;

/*import { Request, Response } from 'express';
import { CreatePsychUseCase } from '../../Application/psych/create-psych.usecase.js';

class PsychController {
  static async create(req: Request, res: Response, createPsychUseCase: CreatePsychUseCase) {
    const payload = req.body;

    await createPsychUseCase.execute(payload);

    return res.status(201).json({ message: 'Psych created' });
  }
}

export default PsychController;
*/