import client from './client';

/**
 * Get Users Which Are Not Admins
 * @param {object} options
 * @param {int} [options.page]
 * @param {int} [options.limit]
 *
 * @returns {Promise}
 */
export function getNoAdminUsers(options = {}) {
  return client.get('/v1/users/no-admins', options);
}

/**
 * Get Users Which Are Admins
 * @param {object} options
 * @param {int} [options.page]
 * @param {int} [options.limit]
 *
 * @returns {Promise}
 */
export function getAdminUsers(options = {}) {
  return client.get('/v1/users/admins', options);
}

/**
 * Get a user
 * @param {string|int} id - email or ID of the user
 * @param {object} options
 *
 * @returns {Promise}
 */
export function getUser(id, options = {}) {
  return client.get(`/v1/users/${id}`, options);
}

export function makeAdmin(user) {
  return client.post(`/v1/users/${user}/Make-Admin`);
}

export function makeContributor(user) {
  return client.post(`/v1/users/${user}/Make-Contributor`);
}

export default {
  getNoAdminUsers,
  getAdminUsers,
  getUser,
  makeAdmin,
  makeContributor
};
