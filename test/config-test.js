var should = require('should');
var npg = require('../core/npg').npg;
var config = require('./_test_config_npg');
var request = ({body: {phrase: "111"}});

describe('NPG w/ config', function () {
  it('should using fixed key', function () {
    config.useFixedKey.should.be.ok;
  });
  it('should return correct answer', function () {
    npg("111",config.key1,config.key2).should.eql({ md5: '747207ac', b64: '!QWOwMWY3AjM3QzN' })
  })
});
