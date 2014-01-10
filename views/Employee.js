var $                   = require('jquery')(window),
    Backbone            = require('backbone'),
    template            = require("../templates/Employee.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template(this.model.attributes));
        return this;
    }

});
