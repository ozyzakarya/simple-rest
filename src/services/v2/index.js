const userService = require('./users/users.service.js');
const accessTokenService = require('./access-tokens/access.tokens.service.js');
const purchaseProductService = require('./purchase-product/product.purchase.service.js');
const productService = require('./product/product.service.js');
const membershipService = require('./membership/membership.service.js');
const ownMembershipService = require('./own-membership/own.membership.service.js');

module.exports = {
    userService,
    accessTokenService,
    purchaseProductService,
    productService,
    membershipService,
    ownMembershipService
}