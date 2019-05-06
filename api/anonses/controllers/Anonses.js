'use strict';

/**
 * Anonses.js controller
 *
 * @description: A set of functions called "actions" for managing `Anonses`.
 */

module.exports = {

  /**
   * Retrieve anonses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.anonses.search(ctx.query);
    } else {
      return strapi.services.anonses.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a anonses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.anonses.fetch(ctx.params);
  },

  /**
   * Count anonses records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.anonses.count(ctx.query);
  },

  /**
   * Create a/an anonses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.anonses.add(ctx.request.body);
  },

  /**
   * Update a/an anonses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.anonses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an anonses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.anonses.remove(ctx.params);
  }
};
