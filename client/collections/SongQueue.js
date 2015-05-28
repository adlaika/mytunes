// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
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
      if(song === this.at(0)){
        this.at(0).abort();
        this.dequeue(song);
        if(this.length > 0){
          this.playFirst();
        }
      } else {
        this.dequeue(song);
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  removeFirst: function(){
    this.remove(this.at(0));
  },

  dequeue: function(song){
    this.remove(song);
  },

  enqueue: function(song) {
    this.add(song);
  }
});
