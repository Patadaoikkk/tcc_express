
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const psych = require('../models/psych');

router.get('/psych', (req, res) => {
  res.send('psych cadastro'); //tentando fazer funcionar
});
router.post('../models/user', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  const user = new User(fullName, email, password, confirmPassword);
  await user.hashPassword();
  await user.save();
  res.send('Usuário criado com sucesso');
});
router.get('/teste', (req, res) => {
  res.send('Rota teste funcionando'); //rotas teste nem eiste este arquivo
});
router.get('/index', (req, res) => {
  res.send('texto'); //outro teste 
});

module.exports = router;
