// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.removeFirst();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.dequeue(song);
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  removeFirst: function(){
    this.remove(this.at(0));
  },

  dequeue: function(song){
    this.remove(this.at(song));
  },

  enqueue: function(song) {
    this.add(song);
  }
});
