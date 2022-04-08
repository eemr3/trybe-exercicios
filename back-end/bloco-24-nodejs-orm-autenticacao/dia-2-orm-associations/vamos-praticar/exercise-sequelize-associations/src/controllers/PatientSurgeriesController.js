const PatientSurgeriesService = require('../services/PatientSurgeriesService');

const getAll = async (req, res) => {
  try {
    const patientSurgeries = await PatientSurgeriesService.getAll();

    return res.status(200).json(patientSurgeries);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu ruim!!' });
  }
};

const getById = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAll,
};
