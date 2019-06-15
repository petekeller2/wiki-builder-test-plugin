const fs = require('fs');

module.exports = {
  getStep: function () {
    return [[this.testMethodByTest, []], [[this.testMethodTwo, []]]];
  },
  testMethodByTest: function () {
    console.log('Test method');
    fs.appendFile('log.txt', 'testMethodByTest was called\n', function (err) {
      if (err) throw err;
      console.log('Write for testMethodByTest Saved!');
    });
  },
  testMethodTwo: function () {
    console.log('Test method two');
    fs.appendFile('log.txt', 'testMethodTwo was called\n', function (err) {
      if (err) throw err;
      console.log('Write for testMethodTwo Saved!');
    });
  },
  filesByTestReduce: function (filesInTempDir, extraArgs, specificFunc) {
    filesInTempDir.forEach(function(element) {
      specificFunc();
      console.log('test', element);
      fs.appendFile('log.txt', 'filesByTestReduce was called\n', function (err) {
        if (err) throw err;
        console.log('Write for filesByTestReduce Saved!');
      });
    });
    return filesInTempDir;
  },
};