var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: String,
  name: String,
  assetType: String,
  coordinates: String,
  assetDetails: Object,
  districtId: String
});

module.exports = mongoose.model('Asset', schema);