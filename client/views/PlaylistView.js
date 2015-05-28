var PlaylistView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<th> <%= name %> </th>'),

  events: {
    'click': function(){
      this.model.get('playlistSongs').each(function(song){
        song.enqueue();
      });
    }
  },

  initialize: function() {
    this.render();
    this.model.get('playlistSongs').on('add remove', function(){
      this.render();
    }, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html(this.template(this.model.attributes)).append(
      this.model.get('playlistSongs').map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});
