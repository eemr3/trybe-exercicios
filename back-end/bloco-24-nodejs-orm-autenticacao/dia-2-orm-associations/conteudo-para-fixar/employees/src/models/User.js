module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: { type: DataTypes.INTEGER, primaryKey: true },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      age: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: true,
    },
  );
  return User;
};
