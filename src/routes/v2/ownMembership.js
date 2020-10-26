require('module-alias/register');
const { response } = require('@helpers');
const { ownMembershipService } = require('@services/v2');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
    '/',
    [
      body('membership_id'),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(response(false, errors.array()));
      }
      ownMembershipService.create(req, res);
    }
  );

  module.exports = router;