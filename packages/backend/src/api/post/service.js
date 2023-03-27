const helper = require('../../app/helpers/helper');

const allPost = {
  get: async (connection, options) => {
    const limit = options.offset;
    let offset = (options.page - 1) * limit;

    const { count: totalCount, rows: posts } = await connection.Posts.findAndCountAll({
      offset: offset,
      limit: limit,
      order: [['createdAt', 'DESC']]
    });

    return {
      success: true,
      result: {
        totalCount,
        posts
      }
    };
  }
};

const specificPost = {
  get: async (connection) => {
    const post = await connection.Posts.findAll({
      order: [['createdAt', 'DESC']]
    });

    const numbers = helper.random.numbers(post.length);

    return {
      success: true,
      result: {
        lastPost: post.splice(0, 3),
        randomPost: [post[numbers.one], post[numbers.tow]]
      }
    };
  }
};

const post = {
  post: async (connection, options) => {
    const { url } = await helper.cloudinary.uploadFile(options.image);

    if (!url) return helper.doom.error.imageInvalid();

    const post = await connection.Posts.create({
      ...options,
      image: url
    });

    return {
      success: true,
      result: { id: post.id }
    };
  },
  get: async (connection, options) => {
    const post = await connection.Posts.findOne({
      where: {
        id: options.id
      }
    });

    if (!post) return helper.doom.error.postNotFound();

    return {
      success: true,
      result: { post }
    };
  },
  put: async (connection, options) => {
    const post = await connection.Posts.findOne({
      where: {
        id: options.id
      }
    });

    if (!post) return helper.doom.error.postNotFound();

    if (typeof options.image !== 'string') {
      const { url } = await helper.cloudinary.uploadFile(options.image);

      if (!url) return helper.doom.error.imageInvalid();

      options.image = url;
    }

    await connection.Posts.update({ ...options }, { where: { id: options.id } });

    return {
      success: true,
      result: { id: options.id }
    };
  },
  delete: async (connection, options) => {
    const post = await connection.Posts.findOne({
      where: {
        id: options.id
      }
    });

    if (!post) return helper.doom.error.postNotFound();

    await connection.Posts.destroy({
      where: {
        id: options.id
      }
    });

    return {
      success: true,
      result: { id: options.id }
    };
  }
};

module.exports = {
  specificPost,
  allPost,
  post
};
