// RFC2822 Email Validation - https://regexr.com/2rhq7
const emailRegEx =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegEx = /.{10,}/;

export const checkEmail = (email: string) => {
  return emailRegEx.test(email);
};

export const checkPassword = (password: string) => {
  return passwordRegEx.test(password);
};
