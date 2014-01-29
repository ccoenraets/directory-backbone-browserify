var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./router');
var router = new Router();

$("body").on("click", ".back-button", function (event) {
    event.preventDefault();
    window.history.back();
});

Backbone.history.start();
