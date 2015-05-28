var Playlist = Songs.extend({

  defaults: {
    name: "My Playlist"
  },

  initialize: function (name) {
    this.set('name', name);
  }

});
