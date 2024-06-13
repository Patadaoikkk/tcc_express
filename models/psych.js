const uuidv4 = require('uuid').v4;
const { DateTime } = require('luxon');
const bcrypt = require('bcryptjs');

class Psych {
  constructor() {
    this.id = uuidv4();
    this.fullName = null;
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.phone = '';
    this.crp = '';
    this.estado = '';
    this.createdAt = DateTime.now();
    this.updatedAt = DateTime.now();
  }

  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

module.exports = Psych;



/*import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';
import bcrypt from 'bcryptjs';

class Psych {
  id: string;
  fullName: string | null;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  crp: string;
  estado: string;
  createdAt: DateTime;
  updatedAt: DateTime;

  constructor() {
    this.id = uuidv4();
  }

  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

export default Psych;*/