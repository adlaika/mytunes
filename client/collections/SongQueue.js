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
      console.log('ended on sq')
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      console.log('listener')
      this.dequeue(song);
      if(this.length > 0){
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    console.log(this.at(0));
    this.at(0).play();
  },

  removeFirst: function(){
    this.remove(this.at(0));
  },

  dequeue: function(song){
    console.log('other thing')
    this.remove(song);
  },

  enqueue: function(song) {
    this.add(song);
  }
});
