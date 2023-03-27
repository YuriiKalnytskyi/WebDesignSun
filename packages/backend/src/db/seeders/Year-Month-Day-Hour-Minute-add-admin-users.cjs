const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@gmail.com',
          fullName: 'admin',
          password: bcrypt.hashSync('qwerty123', 10),
          accessToken: '',
        },
        {
          email: 'admin2@gmail.com',
          fullName: 'admin2',
          password: bcrypt.hashSync('qwerty123', 10),
          accessToken: '',
        },
      ]
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
