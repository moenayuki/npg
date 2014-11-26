var npg = require('../core/npg');
var config = require('../config_npg');

exports.index = function (req, res) {
  res.render('npg', {pageid: 'npg', headtitle: "NPG v0.7", originalkey: "", md5res: "", b64res: "", isKeysFixed: config.useFixedKey});
};

exports.plain = function (req, res) {
  var phrase = req.body.target;
  if(config.useFixedKey) {
    key1 = config.key1;
    key2 = config.key2;
  }
  else {
    key1 = req.body.key1;
    key2 = req.body.key2;
  }
  res.send(npg.npg(phrase, key1, key2));
};