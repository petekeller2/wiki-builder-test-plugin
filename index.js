module.exports = {
  getStep: function () {
    return [[this.testMethodByTest, []], [[this.testMethodTwo, []]]];
  },
  testMethodByTest: function () {
    console.log('Test method');
  },
  testMethodTwo: function () {
    console.log('Test method two');
  },
  filesByTestReduce: function (filesInTempDir, extraArgs, specificFunc) {
    filesInTempDir.forEach(function(element) {
      specificFunc();
      console.log('test', element);
    });
    return filesInTempDir;
  },
};