import client from './client';

/**
 * Get Popular Reciters
 * @param {object} [options]
 * @param {int} [options.limit]
 *
 * @returns {Promise}
 */
export function getTopReciters(options = {}) {
  return client.get('/v1/popular/reciters', options);
}

/**
 * Get Popular Albums
 * @param {object} [options]
 * @param {int} [options.limit]
 * @param {int} [options.reciterId]
 *
 * @returns {Promise}
 */
export function getTopAlbums(options = {}) {
  return client.get('/v1/popular/albums', options);
}

/**
 * Get Popular Tracks
 * @param {object} [options]
 * @param {int} [options.limit]
 * @param {int} [options.reciterId]
 * @param {int} [options.albumId]
 *
 * @returns {Promise}
 */
export function getTopTracks(options = {}) {
  return client.get('/v1/popular/tracks', options);
}

export default {
  getTopReciters,
  getTopAlbums,
  getTopTracks,
};
