const PlansService = require('../services/PlansSerive');

const getAll = async () => {
  const plans = await PlansService.getAll();

  return plans;
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await PlansService.getById(id);

    return res.status(200).json(plan);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
};
