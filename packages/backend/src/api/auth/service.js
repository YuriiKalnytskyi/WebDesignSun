const helper = require('../../app/helpers/helper');
const bcrypt = require('bcryptjs');

const singIn = {
  post: async (connection, options) => {
    options.password = bcrypt.hashSync(options.password, 10);

    const user = await connection.Users.create({ ...options });

    return {
      success: true,
      result: {
        data: { id: user.id }
      }
    };
  }
};

const login = {
  post: async (connection, options) => {
    const user = await connection.Users.findOne({
      where: {
        email: options.email
      }
    });

    if (user === null) {
      return helper.doom.error.emailNotFound(options.email);
    }

    const incorrectPassword = !bcrypt.compareSync(options.password, user.password);
    if (incorrectPassword) {
      return helper.doom.error.passwordNotValid();
    }

    const accessToken = helper.token.user.accessToken(user.id, process.env.ADMIN_TYPE, user);

    await connection.Users.update(
      {
        accessToken
      },
      {
        where: {
          email: options.email
        }
      }
    );

    return {
      success: true,
      result: {
        accessToken
      }
    };
  }
};

const logout = {
  post: async (connection, options) => {
    await connection.Users.update(
      {
        accessToken: ''
      },
      {
        where: {
          email: options.email
        }
      }
    );

    return {
      success: true,
      result: {
        message: 'Logout successfully.'
      }
    };
  }
};

module.exports = {
  singIn,
  login,
  logout
};
