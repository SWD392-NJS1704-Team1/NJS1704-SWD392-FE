export const REGEX = {
  PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
};

export const Length_Password = 6;


export const MESS = {
  ERROR: "/error",
  INVALID: "invalid",
  ERROR_NAME: "Please enter user name.",
  ERROR_PASSWORD: "Please enter password.",
  ERROR_PASSWORD_INVALID: "Password must be at least 6 characters long.",
  ERROR_ADDRESS: "Please enter address.",
  ERROR_EMAIL: "Please enter email address.",
  ERROR_EMAIL_INVALID: "Please enter a valid email address.",
  ERROR_PHONE: "Please enter phone number.",
  ERROR_PHONE_INVALID: "Please enter a valid phone number of Vietnam.",
  ERROR_ROLE: "Please choose role.",
  ERROR_COUNTER: "Please choose counter.",
  ERROR_GENDER: "Please choose gender.",
  ERROR_STATUS: "Please choose status."
};
