var utils = require('../utils/utils.js');

var url = utils.serviceURL + '/api/travelprofile/v1.0/profile';

module.exports = {
  get: function (options) {
    options.resourceURL = url;
    return utils.get(options);
  }
};