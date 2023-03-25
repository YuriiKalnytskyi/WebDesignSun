export const inputsLogin = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    inputType: '1'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    inputType: '2'
  }
];

export const inputsSingIn = [
  {
    type: 'text',
    name: 'fullName',
    label: 'Full Name',
    inputType: '1'
  },
  ...inputsLogin
];
