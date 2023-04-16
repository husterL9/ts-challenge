function loggingIdentity(arg) {
  console.log(arg.length);
  return arg;
}
var GenericNumber = /** @class */ (function () {
  function GenericNumber() {}
  return GenericNumber;
})();
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
function createArray(length, value) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArray(4, 5));
