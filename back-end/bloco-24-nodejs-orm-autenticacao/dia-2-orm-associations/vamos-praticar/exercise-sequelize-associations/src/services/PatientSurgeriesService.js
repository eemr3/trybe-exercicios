const { PatientSurgerie, Surgerie } = require('../models');

const getAll = async () => {
  const patientSurgerie = await PatientSurgerie.findAll({
    includ: [
      {
        model: Surgerie,
        as: 'surgeries',
        through: { attributes: [] },
      },
    ],
  });

  return patientSurgerie;
};

module.exports = {
  getAll,
};
