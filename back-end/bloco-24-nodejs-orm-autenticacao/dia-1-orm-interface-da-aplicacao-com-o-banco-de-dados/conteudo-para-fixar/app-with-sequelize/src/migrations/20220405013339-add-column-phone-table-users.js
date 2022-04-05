'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'phone_num');
  },
};
