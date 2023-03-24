const helper = require('../../app/helpers/helper');
const bcrypt = require('bcryptjs');

const example = {
  post: async (connection, options) => {
    const findUser = await connection.Users.findOne({ where: { email: 'admin@gmail.com' } }); // options.email

    if (findUser) {
      return helper.doom.error.emailAlreadyRegistered();
    }

    options.password = bcrypt.hashSync(options.password, 10);

    await connection.Users.create({ ...options });

    return {
      success: true,
      result: {
        data: 'example'
      }
    };
  }
};

module.exports = {
  example
};
