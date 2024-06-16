
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('app', { title: 'Olá, mundo!' }); //tentando fazer funcionar
});

router.get('/psych', (req, res) => {
  res.send('psych cadastro'); //tentando fazer funcionar
});
router.get('/user', (req, res) => {
  res.send('user cadastro'); //tentando fazer funcionar
});
router.get('/teste', (req, res) => {
  res.send('Rota /teste funcionando'); //rotas teste nem eiste este arquivo
});
router.get('/index', (req, res) => {
  res.send('texto'); //outro teste 
});

module.exports = router;
