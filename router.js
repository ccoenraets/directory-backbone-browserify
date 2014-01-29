"use strict";

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var PageSlider = require('./utils/pageslider'),
    HomeView = require('./views/Home'),
    EmployeeView = require('./views/Employee'),
    ReportsView = require('./views/Reports'),
    models = require('./models/memory/employee'),
    slider = new PageSlider($('body')),
    homeView = new HomeView();

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
        "employees/:id": "employeeDetails",
        "employees/:id/reports": "reports"
    },

    home: function () {
        console.log("home");
//        homeView.delegateEvents();
        slider.slidePage(homeView.$el);
    },

    employeeDetails: function (id) {
        console.log("employeeDetails");
        var employee = new models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                slider.slidePage(new EmployeeView({model: data}).$el);
            }
        });
    },

    reports: function (id) {
        console.log("reports");
        var employee = new models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                slider.slidePage(new ReportsView({model: data}).$el);
            }
        });
    }

});
