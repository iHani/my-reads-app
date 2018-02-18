var flatMap = require('array.prototype.flatmap');

var arr = [[]];

var results = flatMap(arr, function (x, i) {
    // assert.equal(x, arr[i]);
    return x;
});

const obj = {
  first: [1,2,3,4],
  second: [6,5,7,8],
  third: [68,74,59,25]
}

const keys = Object.keys(obj)



console.log(keys[2]);
