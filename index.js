const glob = require('fast-glob');
const jsFiles = '**/*.js';

console.log('\nignoring files in "foo" directories');
const ignoreFooDirs = glob.sync(jsFiles, {
  ignore: ['node_modules', '**/foo/**']
})
console.log(ignoreFooDirs)

console.log('\nignoring files in "foo" root directory');
const ignoreOnlyRootFooDir = glob.sync(jsFiles, {
  ignore: ['node_modules', '/foo/**']
})
console.log(ignoreOnlyRootFooDir)

console.log('\nignoring file one.js inside foo directories')
const ignoreOneFile = glob.sync(jsFiles, {
  ignore: ['node_modules', '**/foo/one.js']
})
console.log(ignoreOneFile)

console.log('\nignoring file one.js inside foo directories and files in "foo" root directory')
const ignoreRootFooDirAndOneFile = glob.sync(jsFiles, {
  ignore: ['node_modules', '/foo/**', 'foo/one.js']
})
console.log(ignoreRootFooDirAndOneFile)
