const registration = {
  post: (user) => {
    return {
      fullName: user.full_name,
      email: user.email
    };
  }
};

const login = {
  post: (options) => {
    return {
      accessToken: options.access_token
    };
  }
};

module.exports = {
  registration,
  login
};
