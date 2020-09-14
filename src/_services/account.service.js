import { BehaviorSubject } from "rxjs";

import config from "config";
import { fetchWrapper, history } from "@/_helpers";
const baseUrl = `${config.apiUrl}/accounts`;

export const accountService = {
  login,
  logout,
  refreshToken,
  register,
  verifyEmail,
  forgotPassword,
  validateResetToken,
  resetPassword,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

function login(email, password) {
  return fetchWrapper
    .post(`${baseUrl}/authenticate`, { email, password })
    .then((user) => {
      //startRefreshTokenTimer();
      return user;
    });
}

function logout(callback) {
  // revoke token, stop refresh timer, publish null to user subscribers and redirect to login page
  localStorage.removeItem("sigma_token");
  fetchWrapper.post(`${baseUrl}/revoke-token`, {}).then(
    () => {
      //stopRefreshTokenTimer();
    },
    () => {
      callback && callback();
    }
  );
}

function refreshToken() {
  return fetchWrapper.post(`${baseUrl}/refresh-token`, {}).then((user) => {
    //startRefreshTokenTimer();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  });
}

function register(params) {
  return fetchWrapper.post(`${baseUrl}/register`, params);
}

function verifyEmail(token) {
  return fetchWrapper.post(`${baseUrl}/verify-email`, { token });
}

function forgotPassword(email) {
  return fetchWrapper.post(`${baseUrl}/forgot-password`, { email });
}

function validateResetToken(token) {
  return fetchWrapper.post(`${baseUrl}/validate-reset-token`, { token });
}

function resetPassword({ token, password, confirmPassword }) {
  return fetchWrapper.post(`${baseUrl}/reset-password`, {
    token,
    password,
    confirmPassword,
  });
}

function getAll() {
  return fetchWrapper.get(baseUrl).then(
    (users) => {
      return users;
    },
    (err) => {
      throw err;
    }
  );
}

function getById(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params).then((user) => {
    // update stored user if the logged in user updated their own record
    console.log(`user1: ${JSON.stringify(user)}`);
    return user;
  });
}

// prefixed with underscore because 'delete' is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`).then((x) => {
    // auto logout if the logged in user deleted their own record
    // if (id === user.id) {
    //   logout();
    // }
    return x;
  });
}
