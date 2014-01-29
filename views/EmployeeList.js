var $ = require('jquery'),
    Backbone = require('backbone'),
    template = require("../templates/EmployeeList.hbs");

Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
        this.collection.on("reset", this.render, this);
    },

    render: function () {
        console.log(this.collection.toJSON());
        this.$el.html(template(this.collection.toJSON()));
        console.log("EmployeeList end render");
        return this;
    }

});
