var controller = module.exports = {},
  models = require('../models');

// Get all projects
controller.getAllAssets = function(req, res) {
  models.Asset.find({}, function(err, assets) {
    res.json({
      message: 'Here are all the assets',
      assets: assets
    })
  })
}

// Create an asset
controller.createAsset = function(req, res) {

  var newAsset = new models.Asset({
    id: '1',
    name: 'V2',
    assetType: 'Valve',
    coordinates: '36.752212, -119.727397',
    assetDetails: {
      mapPage : '',
      locationDescription: 'Turner & Willow, in line with the north-south property line on south side of Turner ',
      type: '',
      size: '',
      numberTurns: '2',
      torque: '',
      condition: '',
      lastExercise: '',
      nextExercise: '',
      notes: '',
      comments: ''
    },
    districtId: '1'
  });

  newAsset.save(function(err) {
    if (err) return handleError(err);
  });

  res.json({
    message: 'Created new asset!',
    asset: newAsset
  });
}

// Get an Asset
controller.getAsset = function(req, res) {

  models.Asset.findOne({_id: req.params.id}, function(err, asset) {
    res.json({
      message: 'Found the asset',
      asset: asset
    });
  });

}

// Delete an asset
controller.deleteAsset = function(req, res) {

  models.Asset.findOne({_id: req.params.id}, function(err, asset) {

  });

}

// Update an asset
controller.updateAsset = function(req, res) {
  models.Asset.findOne({_id: req.params.id}, function(err, asset) {
    asset.id = '1';
    asset.name = 'V2';
    asset.assetType ='Valve';
    asset.coordinates = '36.752212, -119.727397';
    asset.assetDetails = {
      mapPage : '',
        locationDescription: 'Turner & Willow, in line with the north-south property line on sourth side of Turner ',
        type: '',
        size: '',
        numberTurns: '2',
        torque: '',
        condition: '',
        lastExercise: '',
        nextExercise: '',
        notes: '',
        comments: ''
    };
    asset.districtId = 'Bakman';
    asset.save();
    res.json({
      message: 'Asset Updated',
      asset: asset
    })
  });

};