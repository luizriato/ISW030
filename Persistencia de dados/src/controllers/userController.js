const User = require('../models/userModel');
 
// Função assíncrona para obter todos os usuários
exports.getUser = async (req, res) => {
  try {
    const users = await User.find(); // Utiliza o plural 'users' para representar uma lista de usuários
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
 
// Função para criar um novo usuário
exports.create = (req, res) => {
  const user = new User({
name: req.body.name,
    age: req.body.age
  });
 
  user.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ message: `Falha ao cadastrar usuário: ${err.message}` }));
};
 
// Função assíncrona para obter um usuário por ID
exports.details = async (req, res) => {
  try {
const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};