export const REGEX = {
  PHONE: /^((84[3|5|7|8|9])|(0[3|5|7|8|9]))[0-9]{8}$/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  DOB: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/
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
  ERROR_DOB: "Please enter date of birth.",
  ERROR_DOB_INVALID: "Invalid date format (DD/MM/YYYY).",
  ERROR_ROLE: "Please choose role.",
  ERROR_COUNTER: "Please choose counter."
};
