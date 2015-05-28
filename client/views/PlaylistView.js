var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add remove', function(){
      this.render();
    }, this);
  },

  render: function(){
    console.log('rendering PlaylistView')
    console.log(this)
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});
