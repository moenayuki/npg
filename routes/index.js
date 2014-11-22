var npg = require('../core/npg');

exports.index = function (req, res) {
  console.log("EMURATED.");
  res.render('npg', {pageid: 'npg', headtitle: "NPG v0.5", originalkey: "", md5res: "", b64res: ""});
};

exports.plain = function (req, res) {
  var phrase = req.body.target;
  var key1 = req.body.key1;
  var key2 = req.body.key2;

  res.send(npg.npg(phrase, key1, key2));
};