// Code your solution in this file!
const first = function (el, i, arr) {
  console.log(el.name)
}


function logDriverNames(array) {
  array.forEach(first)
}


function logDriversByHometown(array, location) {
  array.forEach(function (el, i, arr) {
    if (location === el.hometown) {
      return el.name
    }
  })
}