var should = require('should');
var app = require('../app.js');
var supertest = require('supertest');
var request = supertest(app);

describe('NPG post method', function () {
  it('should return correct answer', function (done) {
    request
      .post('/plain')
      .send({target: '111', key1: 'aaa', key2: 'bbb'})
      .set('Accept', 'application/json')
      .end(function (err, res) {
        res.body.md5.should.be.exactly('747207ac');
        res.body.b64.should.be.exactly('!QWOwMWY3AjM3QzN');
        done(err);
      });
  })
});