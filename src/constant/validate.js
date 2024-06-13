export const REGEX = {
  PHONE: /^((84[3|5|7|8|9])|(0[3|5|7|8|9]))[0-9]{8}$/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  DOB: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/,
};

export const Length_Password = 3;

export const MESS = {
  ERROR: '/error',
  INVALID: 'invalid',
  ERROR_NAME: 'Please enter user name.',
  ERROR_PASSWORD: 'Please enter password.',
  ERROR_PASSWORD_INVALID: 'Password must be at least 3 characters long.',
  ERROR_ADDRESS: 'Please enter address.',
  ERROR_EMAIL: 'Please enter email address.',
  ERROR_EMAIL_INVALID: 'Please enter a valid email address.',
  ERROR_PHONE: 'Please enter phone number.',
  ERROR_PHONE_INVALID: 'Please enter a valid phone number of Vietnam.',
  ERROR_DOB: 'Please enter date of birth.',
  ERROR_DOB_INVALID: 'Invalid date format (DD/MM/YYYY).',
  ERROR_ROLE: 'Please choose role.',
  ERROR_COUNTER: 'Please choose counter.',
  ERROR_PRODUCT_NAME: 'Please enter product name.',
  ERROR_PRODUCT_BARCODE: 'Please enter product barcode.',
  ERROR_PRODUCT_QUANTITY: 'Please enter product quantity.',
  ERROR_PRODUCT_QUANTITY_INVALID: 'Please enter a valid quantity.',
  ERROR_PRODUCT_PRICE_PROCESSING: 'Please enter product price processing.',
  ERROR_PRODUCT_PRICE_STONE: 'Please enter a product price stone.',
  ERROR_PRODUCT_WEIGHT: 'Please enter product weight.',
  ERROR_PRODUCT_DESCRIPTION: 'Please enter product description.',
  ERROR_PRODUCT_IMAGE: 'Please choose image of product.',
  ERROR_PRODUCT_CATEGORY_ID: 'Please choose product category id.',
  ERROR_COUNTER_NAME: 'Please enter counter name.',
  ERROR_LOCATION: 'Please enter location.',
};
