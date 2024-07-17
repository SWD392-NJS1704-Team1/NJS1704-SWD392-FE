const USER = '/user';
const CUSTOMER = '/customers';
const PRODUCT = '/products';
const COUNTER = '/counter';
const TYPE_PRICES = '/type-prices';
const ORDER = '/order';
const PROMOTION = '/promotion';
const DETAIL = '/:id';
const ORDER_DETAIL= '/order-detail';
const GOLD_PRICE = '/gold-price';

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_PASSWORD: '/reset-password',
  PRODUCT: {
    INDEX: PRODUCT,
    DETAIL: PRODUCT + DETAIL,
  },
  USER: {
    INDEX: USER,
    DETAIL: USER + DETAIL,
  },
  CUSTOMER: {
    INDEX: CUSTOMER,
    DETAIL: CUSTOMER + DETAIL,
  },
  COUNTER: {
    INDEX: COUNTER,
  },
  TYPE_PRICES: {
    INDEX: TYPE_PRICES,
  },
  ORDER: {
    INDEX: ORDER,
  },
  PROMOTIONS: {
    INDEX: PROMOTION,
  },
  ORDER_DETAIL:{
    INDEX: ORDER_DETAIL,
  },
  GOLD_PRICE: {
    INDEX: GOLD_PRICE,
  },
  
};
