
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const psych = require('../models/psych');

router.get('/psych', (req, res) => {
  res.send('psych cadastro'); //tentando fazer funcionar
});
router.get('/user', (req, res) => {
  res.send('user cadastro'); //tentando fazer funcionar
});
router.get('/teste', (req, res) => {
  res.send('Rota teste funcionando'); //rotas teste nem eiste este arquivo
});
router.get('/index', (req, res) => {
  res.send('texto'); //outro teste 
});

module.exports = router;
