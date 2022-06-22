// eslint-disable-next-line require-jsdoc
function generatePassword() {
  const chars =
      // eslint-disable-next-line max-len
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]';


  const passwodLength = 15;

  let password = '';

  for (let i = 0; i < passwodLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

export default generatePassword;
