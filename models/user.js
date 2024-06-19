const uuidv4 = require('uuid').v4;
const { DateTime } = require('luxon');
const bcrypt = require('bcryptjs');
const pool = require('../database/bd');

class User {
  constructor() {
    this.id = uuidv4();
    this.fullName = null;
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.createdAt = DateTime.now();
    this.updatedAt = null;
  }

  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
console.log("funcionando");

module.exports = User;


/*import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';
import bcrypt from 'bcryptjs';

class User {
  id: string;
  fullName: string | null;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: DateTime;
  updatedAt: DateTime | null;

  constructor() {
    this.id = uuidv4();
  }

  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

export default User;*/