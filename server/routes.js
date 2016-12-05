module.exports = function(app) {

  var router = require('express').Router()
  controllers = require('./controllers')
  mongoose = require('mongoose'),
    config = require('./config');

  mongoose.connect(config.mongodbUrl);

  // === ALL Routes

  //Districts
  router.route('/districts')
    .get(controllers.district.getAllDistricts)
    .post(controllers.district.createDistrict)
  router.route('/district/:id')
    .get(controllers.district.getDistrict)
    .put(controllers.district.updateDistrict)
    .delete(controllers.district.deleteDistrict)

  //Asset Types
  router.route('/asset-types')
    .get(controllers.assettype.getAllAssetTypes)
    .post(controllers.assettype.createAssetType)
  router.route('/asset-type/:id')
    .get(controllers.assettype.getAssetType)
    .put(controllers.assettype.updateAssetType)
    .delete(controllers.assettype.deleteAssetType)

  // Assets
  router.route('/assets')
    .get(controllers.asset.getAllAssets)
    .post(controllers.asset.createAsset)
  router.route('/asset/:id')
    .get(controllers.asset.getAsset)
    .put(controllers.asset.updateAsset)
    .delete(controllers.asset.deleteAsset)


  app.use('/api', router);
}