module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'patient_id',
      },
      fullName: {
        type: DataTypes.STRING,
        field: 'fullname',
      },
      planId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        field: 'plan_id',
      },
    },
    {
      timestamps: false,
    },
  );

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'planId', as: 'plans' });
  };

  return Patient;
};
