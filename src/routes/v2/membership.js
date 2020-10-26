require('module-alias/register');
const { response } = require('@helpers');
const { membershipService } = require('@services/v2');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
    '/',
    [
      body('name'),
      body('discount_value'),
      body('discount_quota'),
      body('discount_is_percentage'),
      body('published'),
      body('expiry_in')
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(response(false, errors.array()));
      }
      membershipService.create(req, res);
    }
  );

  module.exports = router;