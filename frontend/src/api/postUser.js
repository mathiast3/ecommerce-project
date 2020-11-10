// http://zetcode.com/javascript/axios/
// https://github.com/natashang/cognixia/tree/master/Express/sampleApi
const axios = require("axios");

async function postUser() {
  const POST_ADD_USER_URL = ".../add/user";
  let params = {
    id: 6,
    first_name: "fred",
    last_name: "blair",
    email: "f@b.com",
  };

  // example url: http://localhost:3000/users/
  return await axios
    .post(POST_ADD_USER_URL, params)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export default postUser;

/*

*/

// const fn = (req, res) => {
//     axios.post('https://reqres.in/api/users/', {
//         name: req.body.name ? (req.body.name).replace(regex, '') : "",
//         job: req.body.job ? (req.body.job).replace(regex, '') : ""
//     })
//     .then((resp) => {
//         res.send(resp.data)
//     }).catch((err) => {
//         res.send(err)
//     })
// }

// export async const postAddUser =()=> {
//     return axios
//         .get(POST_ADD_USER_URL)
//         .then((response) => {
//           console.log("success", response);
//         })
//         .catch((error) => {
//           console.log("error", error);
//         });
// }
