const category = require('./dbs/category.json');
const product = require('./dbs/product.json');

module.exports = function creator() {
    return {
        category,
        product,
    };
};
