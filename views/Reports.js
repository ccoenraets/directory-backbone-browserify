var $ = require('jquery'),
    Backbone = require('backbone'),
    EmployeeListView = require('./EmployeeList'),
    template = require("../templates/Reports.hbs");

module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        this.model.reports.fetch();
        this.listView = new EmployeeListView({collection: this.model.reports, el: $(".scroller", this.el)});
        return this;
    }

});
