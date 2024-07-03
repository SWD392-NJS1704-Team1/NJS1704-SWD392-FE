const USER_MANAGEMENT = '/user-management';
const CUSTOMER = '/customers';
const PRODUCT = '/products';
const COUNTER = '/counter';
const TYPE_PRICES = '/type-prices';
const ORDER = '/order';
const PROMOTION = '/promotion';
const ORDER_DETAIL= '/order-detail';

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_PASSWORD: '/reset-password',
  PRODUCT: {
    INDEX: PRODUCT,
  },
  USER: {
    INDEX: USER_MANAGEMENT,
  },
  CUSTOMER: {
    INDEX: CUSTOMER,
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
  }
};
