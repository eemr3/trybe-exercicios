const { Plan, Patient } = require('../models');

const getAll = async () => {
  const plans = await Plan.findAll();

  return plans;
};

const getById = async (id) => {
  const plan = await Plan.findOne({
    where: { plan_id: id },
    include: [{ model: Patient, as: 'patients' }],
  });

  if (!plan) throw new Error('Plan not found!');

  return plan;
};

module.exports = {
  getAll,
  getById,
};
