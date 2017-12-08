
var config = {};
config.AD_Group = process.env['AD_Group']? process.env['AD_Group'] : 'Default ADGroup';
config.AD_MBAAS = process.env['AD_MBAAS']? process.env['AD_MBAAS'] : 'la2qdh66z5qdew6ue3kdmruk';
config.LOG_LEVEL = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 0;

module.exports = config;