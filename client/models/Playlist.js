var Playlist = Backbone.Model.extend({

  initialize: function(models, options) {
    options || (options = {});
    if (options.name) {
        this.set('name', options.name);
    };
    this.set('playlistSongs', new Songs());
  }

});
