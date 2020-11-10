const axios = require("axios");

export async function getSomething1() {
  const response = await axios.get(link);
  return response.data;
}

export async function getSomething() {
  try {
    const response = await axios.get(link);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// can remove response variable once ensured works
export async function postSomething() {
  const response = await axios.post(link);
  console.log(response);
}

export const getAllUsers = () => {
  const GET_ALL_USERS_URL = ".../allUsers";
  return axios
    .get(GET_ALL_USERS_URL)
    .then((response) => {
      console.log("success", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getUserById = (id) => {
  const GET_USER_BY_ID_URL = `.../user/${id}`;
  return axios
    .get(GET_USER_BY_ID_URL)
    .then((response) => {
      console.log("success", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const deleteUserById = () => {
  const DELETE_USER_BY_ID_URL = `.../delete/user/${id}`;
  return axios
    .get(DELETE_USER_BY_ID_URL)
    .then((response) => {
      console.log("success", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
