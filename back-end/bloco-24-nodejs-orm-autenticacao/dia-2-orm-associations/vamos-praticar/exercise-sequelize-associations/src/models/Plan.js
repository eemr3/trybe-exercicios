module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'plan_id',
      },
      coverage: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'planId', as: 'patients' });
  };

  return Plan;
};
