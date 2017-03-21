console.log([1, 2, 3, 4].map(e => e ** e))
const $ = require('jquery')
var mousewheel = require('imports-loader?define=>false!jquery-mousewheel')
mousewheel($)
console.log($('#content-01').mousewheel(function (event) {
	console.log('event:', event)
}))