var Backbone = require('backbone'),
    $ = require('jquery')(window),
    Backbone = require('backbone'),
    EmployeeListView = require('./EmployeeList'),
    models = require('../models/memory/employee'),
    template = require("../templates/Home.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        console.log("home initialize");
        this.employeeList = new models.EmployeeCollection();
        this.render();
    },

    render: function () {
        this.$el.html(template());
        console.log('before render');
        this.listView = new EmployeeListView({collection: this.employeeList, el: $(".scroller", this.el)});
        console.log('after render');
        return this;
    },

    events: {
        "keyup .search-key": "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        var key = $('.search-key').val();
        this.employeeList.fetch({reset: true, data: {name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }

});