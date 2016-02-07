/* global describe it before */

var install = require('../../lib/install_cmd')
var rimraf = require('rimraf')
var path = require('path')
var pathIsInside = require('path-is-inside')
var assert = require('assert')
var semver = require('semver')

describe('install', function () {
  this.timeout(0)

  var scenarios = [
    { name: 'browserify', version: '12.0.1', checkCli: true },
    { name: 'tape', version: '4.2.2', checkCli: true },
    { name: 'express', version: '4.13.3', checkCli: false },
    { name: 'mocha', version: '2.3.4', checkCli: true },
    { name: 'lodash', version: '3.10.1', checkCli: false },
    { name: 'gulp', version: 'https://github.com/gulpjs/gulp/archive/4.0.tar.gz', checkCli: true },
    { name: 'grunt', version: '0.3.1', checkCli: true }
  ]

  function reset (done) {
    rimraf(path.join(__dirname, 'views', 'themes'), function (err) {
      done(err && err.code !== 'ENOTDIR' ? err : null)
    })
  }

  before(reset)

  scenarios.forEach(function (scenario) {
    var name = scenario.name
    var version = scenario.version

    it('should install ' + name + '@' + version, function (done) {
      install(__dirname, {_: ['', name + '@' + version]}, function (err) {
        assert.ifError(err)
        require(path.join(__dirname, 'views', 'themes', name))
        assert(pathIsInside(require.resolve(path.join(__dirname, 'views', 'themes', name)), __dirname), 'should resolve package from the target directory')
        if (scenario.checkCli) {
          var binPath = path.join('.bin', __dirname, 'views', 'themes', name)
          assert(pathIsInside(require.resolve(binPath), __dirname), 'should resolve excutables from the target dir')
        }
        if (semver.valid(version)) {
          var actualVersion = require(path.join(__dirname, 'views', 'themes', name) + '/package.json').version
          assert(semver.satisfies(actualVersion, version), actualVersion + ' should satisfy' + version)
        }
        done()
      })
    })
  })
})
