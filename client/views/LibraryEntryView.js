// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song"><%= artist %> - </td><td class="song"><%= title %></td><td><%= playCount %></td><td><button>Add to Playlist</button></td>'),

  events: {
    'click .song': function() {
      //this.model.play();
      this.model.enqueue();
    }
  },

  initialize: function(){
    this.model.on('change:playCount', function(){
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
