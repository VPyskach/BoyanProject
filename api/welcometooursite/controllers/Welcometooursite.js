'use strict';

/**
 * Welcometooursite.js controller
 *
 * @description: A set of functions called "actions" for managing `Welcometooursite`.
 */

module.exports = {

  /**
   * Retrieve welcometooursite records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.welcometooursite.search(ctx.query);
    } else {
      return strapi.services.welcometooursite.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a welcometooursite record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.welcometooursite.fetch(ctx.params);
  },

  /**
   * Count welcometooursite records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.welcometooursite.count(ctx.query);
  },

  /**
   * Create a/an welcometooursite record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.welcometooursite.add(ctx.request.body);
  },

  /**
   * Update a/an welcometooursite record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.welcometooursite.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an welcometooursite record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.welcometooursite.remove(ctx.params);
  }
};
