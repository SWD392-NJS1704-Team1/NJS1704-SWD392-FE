// ref: https://vitejs.dev/guide/env-and-mode.html
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const ENV = import.meta.env.VITE_ENV;
export const LOGIN = import.meta.env.VITE_LOGIN_USER_API;

// User API
export const ADDUSER = import.meta.env.VITE_REGISTER_USER_API;
export const DELETEUSER = import.meta.env.VITE_DELETE_USER_API;
export const USERLIST = import.meta.env.VITE_GET_USER_LIST_API;
export const GETUSERINFO = import.meta.env.VITE_GET_USER_INFO_API;
export const UPDATEUSER = import.meta.env.VITE_UPDATE_USER_API;
export const RESETPASSWORD = import.meta.env.VITE_RESET_PASSWORD_API;

// Customer API
export const ADDCUSTOMER = import.meta.env.VITE_ADD_CUSTOMER_API;
export const CUSTOMERLIST = import.meta.env.VITE_GET_CUSTOMER_LIST_API;
export const DELETECUSTOMER = import.meta.env.VITE_DELETE_CUSTOMER_API;
export const UPDATECUSTOMER = import.meta.env.VITE_UPDATE_CUSTOMER_API;

// Product API
export const PRODUCTS_LIST = import.meta.env.VITE_GET_ALL_PRODUCT;
export const ADD_PRODUCT = import.meta.env.VITE_ADD_PRODUCT;
export const DELETE_PRODUCT = import.meta.env.VITE_DELETE_PRODUCT;
export const UPDATE_PRODUCT = import.meta.env.VITE_UPDATE_PRODUCT;
export const GET_PRODUCT_BY_ID = import.meta.env.VITE_GET_PRODUCT_BY_ID;
export const GET_PRODUCT_BY_COUNTER = import.meta.env
  .VITE_GET_PRODUCT_BY_COUNTER;

// TypePrice API
export const TYPEPRICES = import.meta.env.VITE_TYPE_PRICES;

// Counter API
export const COUNTERLIST = import.meta.env.VITE_GET_COUNTER_LIST_API;
export const UPDATECOUNTER = import.meta.env.VITE_UPDATE_COUNTER_API;
export const CREATECOUNTER = import.meta.env.VITE_CREATE_COUNTER_API;
export const COUNTERBYNAME = import.meta.env.VITE_GET_COUNTER_BY_NAME_API;
export const DELETECOUNTER = import.meta.env.VITE_GET_COUNTER_API;
