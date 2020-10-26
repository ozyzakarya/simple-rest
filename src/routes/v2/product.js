require('module-alias/register');
const { response } = require('@helpers');
const { productService } = require('@services/v2');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
    '/',
    [
      body('name'),
      body('price'),
      body('description'),
      body('published')
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(response(false, errors.array()));
      }
      productService.create(req, res);
    }
  );

  module.exports = router;