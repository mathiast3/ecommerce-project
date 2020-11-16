import axios from "axios";
import { deleteProduct, fetchError } from "../actions/product";
import { URI_DEL } from "../constants/index";

const deleteProductById = ({ id }) => async (dispatch) => {
  console.log("delete ", id);
  const src = `${URI_DEL}/product/${id}`;
  return await axios
    .delete(src, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => response.data)
    .then(() => dispatch(deleteProduct(id)))
    .catch((error) => console.log(error));
};

export default deleteProductById;
/*
const deleteProductById = (id) => {
  console.log("delete ", id);
  const src = `${URI_DEL}/product/${id}`;
  return (
    axios
      .delete(src, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => response.data)
      //.then(() => dispatch(deleteProduct()))
      .catch((error) => console.log(error))
  );
};
*/
