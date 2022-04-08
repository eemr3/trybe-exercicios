const { Patient, Plan, Surgerie } = require('../models');

const getAll = async () => {
  const patients = await Patient.findAll({ include: { model: Plan, as: 'plans' } });
  return patients;
};

const getAllAndSurgeries = async () => {
  const getAllAndSurgeries = await Patient.findAll({
    include: { model: Surgerie, as: 'surgeries', attributes: { exclude: ['doctor'] } },
  });
  return getAllAndSurgeries;
};
module.exports = {
  getAll,
  getAllAndSurgeries,
};
