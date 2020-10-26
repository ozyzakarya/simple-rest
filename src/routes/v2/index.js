const { auth } = require('../../helpers');
const express = require('express');

const register = require('./register');
const login = require('./login');
const profile = require('./profile');
const purchase = require('./purchase');
const data = require('./data');
const product = require('./product');
const membership = require('./membership');
const ownMembership = require('./ownMembership');

const v2 = express.Router();

v2.use('/customer/register', register);
v2.use('/customer/login', login);
v2.use('/customer/profile', auth, profile);
v2.use('/customer/purchase', auth, purchase);
v2.use('/product', auth, product);
v2.use('/membership', auth, membership);
v2.use('/custumer/own-membership', auth, ownMembership)
v2.use('/data', data);

module.exports = v2;

