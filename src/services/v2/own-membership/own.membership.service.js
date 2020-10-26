require('module-alias/register');
const { jwtHelpers, response, abilityFinder } = require('@helpers');
const {
    users: User,
    memberships: Membership,
    own_memberships: OwnMembership,
} = require('@models');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const ownMembershipService = {
  create: async (req, res) => {
    const { membership_id } = req.body;

    try { 

    const user = await User.findOne({where : { id : res.local.users.id}});
    if (user) {
      const ownMembership = await OwnMembership.findOne({where : { user_id : res.local.users.id}});
      if (ownMembership) {    
        return res.status(400).json(response(false, 'User has been registered membership'));
      }
    }

      const payload = Object.assign(
        {},
        {
          membership_id,
          user_id: res.local.users.id,
        }
      );
      ownMembership = await OwnMembership.create(payload);
      return res
        .status(201)
        .json(response(true, "Successfully created", ownMembership));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = ownMembershipService;