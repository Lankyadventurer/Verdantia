const { basename } = require('path')

/**
 * Converts a string to lowercase.
 * Replaces all spaces with hyphens.
 *
 * @param {string} name
 * @returns {string}
 */
const normalizeURL = name =>
  name
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')

/**
 * Returns the name of the file without its extension.
 * Prepares the filename to be used in a URL
 *
 * @param {string} filename
 * @param {string} extension
 * @return {string}
 */
const filenameToURL = (filename, extension) =>
  normalizeURL(basename(filename, extension))

module.exports = { normalizeURL, filenameToURL }
