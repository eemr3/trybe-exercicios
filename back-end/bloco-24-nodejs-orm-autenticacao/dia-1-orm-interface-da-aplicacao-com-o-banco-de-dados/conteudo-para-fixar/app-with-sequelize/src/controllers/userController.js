const { User } = require('../models/');

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
const search = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });

    if (!user) return res.status(404).json({ message: 'Usuário não encotrado' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
const create = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;

    const [updateUser] = await User.update({ fullName, email }, { where: { id } });

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    if (!updateUser) return res.status(404).json({ message: 'Usúario não encotrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({ where: { id } });

    console.log(deleteUser);
    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  destroy,
};
