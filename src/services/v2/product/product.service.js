require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
  users: User,
  products: Product,
} = require('@models');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const productService = {
  create: async (req, res) => {
    const { name, price, description, published } = req.body;

    try { 

      const payload = Object.assign(
        {},
        {
          name,
          price,
          description,
          published,
        }
      );
      product = await Product.create(payload);
      return res
        .status(201)
        .json(response(true, "Successfully created", product));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = productService;