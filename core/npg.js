var utility = require('utility');

function md5Cal (phrase, key1, key2) {
  var result = utility.md5(phrase + key1).slice(0,8);
  return utility.md5(result + key2);
}

function b64Cal (phrase) {
  var result = new Buffer(phrase.slice(0,11)).toString('base64');
  result = result.split("").reverse().join("");
  return result.replace(/=/g, "!").replace(/l/g, "&");
}

function npg (phrase, key1, key2) {
  var md5Res = md5Cal(phrase, key1, key2);
  for(var i = 0;i<1000;i++)
    md5Res = md5Cal(md5Res, key1, key2);
  return ({md5: md5Res.slice(0,8), b64: b64Cal(md5Res)});
}

exports.npg = npg;