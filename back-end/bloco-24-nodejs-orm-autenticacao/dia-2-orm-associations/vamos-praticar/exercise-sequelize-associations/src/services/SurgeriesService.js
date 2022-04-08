const { Surgerie, Patient, Plan } = require('../models');

const getAll = async () => {
  const surgeries = await Surgerie.findAll();

  return surgeries;
};

const getByDoctor = async (doctor) => {
  const doctor = await Surgerie.findOne({
    where: { doctor },
    include: [{ model: Patient, as: 'patients' }],
  });

  return doctor;
};
module.exports = {
  getAll,
  getByDoctor,
};
