'use strict';

/**
 * Photosonfirstdisplay.js controller
 *
 * @description: A set of functions called "actions" for managing `Photosonfirstdisplay`.
 */

module.exports = {

  /**
   * Retrieve photosonfirstdisplay records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.photosonfirstdisplay.search(ctx.query);
    } else {
      return strapi.services.photosonfirstdisplay.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a photosonfirstdisplay record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.photosonfirstdisplay.fetch(ctx.params);
  },

  /**
   * Count photosonfirstdisplay records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.photosonfirstdisplay.count(ctx.query);
  },

  /**
   * Create a/an photosonfirstdisplay record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.photosonfirstdisplay.add(ctx.request.body);
  },

  /**
   * Update a/an photosonfirstdisplay record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.photosonfirstdisplay.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an photosonfirstdisplay record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.photosonfirstdisplay.remove(ctx.params);
  }
};
