module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define(
    'Surgerie',
    {
      sugeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'surgery_id',
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  return Surgerie;
};
