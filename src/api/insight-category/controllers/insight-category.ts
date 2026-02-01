import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::insight-category.insight-category', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.service('api::insight-category.insight-category').getCategories(ctx);
    }
}));
