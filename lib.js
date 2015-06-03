var bar = "Hello!!";
var x = bar;

function displayElements(arr) {
  arr.forEach(function(el) {
    console.log(el);
  });
}

module.exports = {
  bar: bar,
  displayElements: displayElements 
};