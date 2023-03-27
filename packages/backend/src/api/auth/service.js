const helper = require('../../app/helpers/helper');
const converter = require('./converter');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');

const registration = {
  post: async (connection, options) => {
    console.log(options);
    // let foundUser = await sql.common.findUser(connection, options.email);
    // if (foundUser) {
    //     return helper.doom.error.emailAlreadyRegistered();
    // }
    // if (options.password !== options.repeatPassword) {
    //     return helper.doom.error.passwordDontMatch();
    // }
    //
    // let user = await sql.registration.post.addUser(connection, options, orderId);
    // let userData = await converter.registration.post(user);

    return {
      success: true,
      result: {
        data: {}
      }
    };
  }
};

const login = {
  post: async (connection, options) => {
    // const user = await sql.common.findUser(connection, options.email);
    //
    // if (user === null) {
    //     return helper.doom.error.emailNotFound(options.email);
    // }

    const incorrectPassword = !bcrypt.compareSync(options.password, user.password);
    if (incorrectPassword) {
      return helper.doom.error.passwordNotValid();
    }

    options.access_token = helper.token.user.accessToken(user.id, process.env.ADMIN_TYPE, user);

    let result = converter.login.post(options);

    return {
      success: true,
      result: result
    };
  }
};

const logout = {
  post: async (connection, user) => {
    // await sql.logout.post.updateUser(connection, user.id);

    return {
      success: true,
      result: {
        message: 'Logout successfully.'
      }
    };
  }
};

module.exports = {
  registration,
  login,
  logout
};
