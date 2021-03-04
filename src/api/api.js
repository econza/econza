import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{ "API-KEY": "e94e1752-e831-4d1b-86da-2fad5b456567"}
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`
          )
          .then((response) => {
            return response.data;
          });
        }
    }

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(
//       `users?page=${currentPage}&count=${pageSize}`
//     )
//     .then((response) => {
//       return response.data;
//     });
// };
