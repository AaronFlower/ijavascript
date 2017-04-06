console.log([1, 2, 3, 4].map(e => e ** e))
// const $ = require('jquery')
console.log('log $:', $)
console.log('jquery $:', jQ)
// var mousewheel = require('imports-loader?define=>false!jquery-mousewheel')
console.log($('#content-01').mousewheel(function (event) {
	console.log('event:', event)
}))