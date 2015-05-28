var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>sup</td>'),//('<td><%= artist %> - </td><td><%= title %></td>'),

  events: {
    // 'click': function() {
    //   //this.model.play();
    //   this.model.enqueue();
    // }
  },

  initialize: function(){

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
