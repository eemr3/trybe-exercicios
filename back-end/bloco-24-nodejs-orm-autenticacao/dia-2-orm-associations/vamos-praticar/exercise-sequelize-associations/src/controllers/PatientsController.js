const PatientsService = require('../services/PatientsService');

const getAll = async (req, res) => {
  try {
    const patients = await PatientsService.getAll();

    return res.status(200).json(patients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu ruim!!' });
  }
};

const getAllAndSurgeries = async (req, res) => {
  try {
    const patientsAndSurgeries = await PatientsService.getAllAndSurgeries();

    return res.status(200).json(patientsAndSurgeries);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu ruim!!' });
  }
};
module.exports = {
  getAll,
  getAllAndSurgeries,
};
