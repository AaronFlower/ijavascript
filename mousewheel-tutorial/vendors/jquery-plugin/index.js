/**
 * 统一处理下 jquery, 将用的 jQuery 插件也加载起来，并给全局使用。
 */
var $ = require('imports-loader?define=>false!jquery')
var mousewheel = require('imports-loader?define=>false!jquery-mousewheel')
mousewheel($)
module.exports = $

