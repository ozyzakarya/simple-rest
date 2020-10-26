require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
  users: User,
  product_purchases: ProductPurchase,
  products: Product,
  own_memberships: OwnMembership,
  memberships: membership
} = require('@models');
const crypt = require('bcrypt');
const config = require('config');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const productPurchaseService = {
  create: async (req, res) => {
    const { product_id, paymentType } = req.body;

    try { 
      const product = await Product.findOne({where : { id : product_id}});
      if (!product) {
        return res.status(400).json(response(false, 'Product not found!'));
      }

      let charge = product.price;
      const user = await User.findOne({where : { id : res.local.users.id}});
      if (user) {
        const ownMembership = await OwnMembership.findOne({where : { user_id : res.local.users.id}});
        if (ownMembership) {    
          // charge = product.price - ownMembership.membership.discountQuota
        }
      }

      const payload = Object.assign(
        {},
        {
          product_id,
          charge: charge,
          user_id : res.local.users.id,
          paymentType,
        }
      );
      productPurchase = await ProductPurchase.create(payload);
      return res
        .status(201)
        .json(response(true, "Successfully created", productPurchase));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = productPurchaseService;