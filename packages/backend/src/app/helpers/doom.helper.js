const { StatusCodes } = require('http-status-codes');

const errorCode = {
  // Wrong data. To send the correct data you need to use the documentation.
  validation: 100,

  // The token in the request was not found.
  tokenNotFound: 110,

  // The token in the request is not correct.
  tokenNotValid: 111,

  // Token lifetime expired.
  tokenExpired: 112,

  /**
   * This email has already been registered.
   * Therefore, we can not register it twice.
   * So, as it is already in our database.
   */
  emailAlreadyRegistered: 120,

  // This email is not found in the database.
  emailNotFound: 121,

  // Password does not match email.
  passwordNotValid: 130,

  // User account was not found.
  accountNotFound: 140,

  // User password was dont match.
  passwordDontMatch: 150,

  // User verification code was not found.
  verificationCodeNotFound: 160,

  // User password not concur.
  passwordNotConcur: 170,

  // User dont have admin rights.
  adminRights: 180,

  // PaymentsInvalid
  imageInvalid: 190
};

const error = {
  validation: (res, error) => {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: error.message.replace(/"/g, ''),
      error: 'Bad request',
      errorCode: errorCode.validation
    });
  },

  passwordDontMatch: (res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Passwords do not match',
      error: 'Bad request',
      errorCode: errorCode.validation
    });
  },

  tokenNotFound: () => {
    return {
      success: false,
      message: 'To pass the identification, we need a token.',
      error: 'Token not found',
      errorCode: errorCode.tokenNotFound
    };
  },

  tokenNotValid: (res) => {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: 'Token failed validation.',
      error: 'Unauthorized access',
      errorCode: errorCode.tokenNotValid
    });
  },

  tokenExpired: (res) => {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: 'Token lifetime expired.',
      error: 'Unauthorized access',
      errorCode: errorCode.tokenExpired
    });
  },

  emailAlreadyRegistered: () => {
    return {
      statusCode: StatusCodes.CONFLICT,
      success: false,
      message: 'This email is already registered.',
      error: 'Conflict',
      errorCode: errorCode.emailAlreadyRegistered
    };
  },

  emailNotFound: (email) => {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      message: `This email: '${email}' is not found.`,
      error: 'Access Denied',
      errorCode: errorCode.emailNotFound
    };
  },

  passwordNotValid: () => {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      message: 'Password is not valid.',
      error: 'Access Denied',
      errorCode: errorCode.passwordNotValid
    };
  },

  accountNotFound: () => {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Account was not found.',
      error: 'Account not found',
      errorCode: errorCode.accountNotFound
    };
  },

  verificationCodeNotFound: () => {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Verification code not found.',
      error: 'Code not found',
      errorCode: errorCode.verificationCodeNotFound
    };
  },

  postNotFound: () => {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Post was not found.',
      error: 'Post not found',
      errorCode: errorCode.accountNotFound
    };
  },

  imageInvalid: () => {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      success: false,
      message: 'Image invalid',
      error: 'Image invalid',
      errorCode: errorCode.imageInvalid
    };
  }
};

module.exports = {
  errorCode,
  error
};
