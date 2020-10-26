require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
    memberships: Membership,
} = require('@models');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const membershipService = {
  create: async (req, res) => {
    const { name, discount_value, discount_quota, discount_is_percentage,  published, expiry_in } = req.body;

    try { 

      const payload = Object.assign(
        {},
        {
          name,
          discount_value,
          discount_quota,
          discount_is_percentage,
          published,
          expiry_in
        }
      );
      membership = await Membership.create(payload);
      return res
        .status(201)
        .json(response(true, "Successfully created", membership));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = membershipService;