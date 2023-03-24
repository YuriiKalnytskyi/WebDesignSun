const example = require('../../api/example/router');

module.exports = {
  userAPI: (app) => {
    app.use('example', example);
  }
};
