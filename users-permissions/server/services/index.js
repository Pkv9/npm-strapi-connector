'use strict';

const jwt = require('./jwt');
const providers = require('./providers');
const user = require('./user');
const role = require('./role');
const usersPermissions = require('./users-permissions');
const providersRegistry = require('../services/providers-registry');

module.exports = {
  jwt,
  providers,
  role,
  user,
  'users-permissions': usersPermissions,
  'providers-registry': providersRegistry,
};