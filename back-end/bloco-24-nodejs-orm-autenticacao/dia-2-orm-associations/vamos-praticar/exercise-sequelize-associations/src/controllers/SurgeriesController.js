const SurgeriesService = require('../services/SurgeriesService');

const getAll = async (req, res) => {
  try {
    const surgeries = await SurgeriesService.getAll();

    return res.status(200).json(surgeries);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu ruim!!' });
  }
};

const getByDoctor = async (req, res) => {
  try {
    const { doctor } = req.params;
    const surgerie = await SurgeriesService.getByDoctor(doctor);

    return res.status(200).json(surgerie);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu ruim!!' });
  }
};
module.exports = {
  getAll,
  getByDoctor,
};
