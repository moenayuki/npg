var should = require('should');
var npg = require("../core/npg");

describe('NPG Core', function () {
  it('should encrypt correctly.', function () {
    npg.npg('111', 'aaa', 'bbb').should.eql({ md5: '747207ac', b64: '!QWOwMWY3AjM3QzN' });
  });
});