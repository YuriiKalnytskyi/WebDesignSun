const auth = require('../../api/auth/router');
const post = require('../../api/post/router');

module.exports = {
  userAPI: (app) => {
    app.use('/auth', auth);
    app.use('/post', post);
  }
};
