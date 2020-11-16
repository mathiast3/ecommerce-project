import axios from "axios";
import { URI } from "../constants/index";
import { setProducts, fetchError, fetchSuccess } from "../actions/products";

// export const setAllProducts = () => async (dispatch) => {
//   const src = `${URI}/products`;
//   return await axios
//     .get(src)
//     .then((response) => response.data)
//     .then((data) => {
//       dispatch(setProducts(data));
//       dispatch(fetchSuccess());
//     })
//     .catch((error) => dispatch(fetchError(error)));
// };

export const getAllProducts = () => {
  const src = `${URI}/products`;
  return axios
    .get(src)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

/**
 * Note! Dummy data is used when connectivity to the database and backend
 * server is not guaranteed
 */
export const setAllProducts = () => async (dispatch) => {
  let data = [
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
  dispatch(setProducts(data));
  return data;
};
