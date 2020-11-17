/**
 * Dummy data objects for use either before or without
 * API calls to the backend server and database
 */

export const LOGIN_ADMIN_USER = {
  userId: 2,
  firstName: "jane",
  lastName: "doe",
  email: "jane@doe.com",
  password: "123",
  role: "ROLE_USER",
};

export const LOGIN_REGULAR_USER = {
  userId: 1,
  firstName: "Alpha",
  lastName: "Bet",
  email: "alpha@bet.com",
  role: "ROLE_REGULAR", // double check on this field
};

export const USERS_DATA = [
  {
    userId: 1,
    firstName: "Alpha",
    lastName: "Bet",
    email: "alpha@bet.com",
    role: "ROLE_USER",
    password: "123",
  },
  ,
  {
    userId: 2,
    firstName: "jane",
    lastName: "doe",
    email: "jane@doe.com",
    role: "ROLE_USER",
    password: "123",
  },
  {
    userId: 3,
    firstName: "tigger",
    lastName: "t",
    email: "t@tidoubleger.com",
    role: "ROLE_USER",
    password: "123",
  },
  {
    userId: 4,
    firstName: "mickey",
    lastName: "mouse",
    email: "mickey@mouse.com",
    role: "ROLE_USER",
    password: "123",
  },
  {
    userId: 5,
    firstName: "john",
    lastName: "smith",
    email: "john@smith.com",
    role: "ROLE_USER",
    password: "123",
  },
];

export const PRODUCTS_DATA = [
  {
    id: 5,
    productName: "chair1",
    image: "",
    productCategory: "chairs",
    productCondition: "used",
    price: 10.99,
  },
  {
    id: 6,
    productName: "chair2",
    image: "",
    productCategory: "chairs",
    productCondition: "used",
    price: 10.99,
  },
  {
    id: 7,
    productName: "chair3",
    image: "",
    productCategory: "chairs",
    productCondition: "used",
    price: 10.99,
  },
  {
    id: 8,
    productName: "chair4",
    image: "",
    productCategory: "chairs",
    productCondition: "used",
    price: 10.99,
  },
];
