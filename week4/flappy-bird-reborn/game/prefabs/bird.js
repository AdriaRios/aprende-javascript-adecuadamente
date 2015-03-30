/* Full tutorial: http://codevinsky.ghost.io/phaser-2-0-tutorial-flappy-bird-part-2/ */
'use strict';
 
var Bird = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);
  this.anchor.setTo(0.5, 0.5);
  
  // add flap animation and begin playing it
  this.animations.add('flap');
  this.animations.play('flap', 12, true);
  
 
  // enable physics on the bird
  this.game.physics.arcade.enableBody(this);
  this.game.physics.physicsBodyType = Phaser.Physics.ARCADE; 
  
};
 
Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;
 
Bird.prototype.update = function() { 
	if(this.angle < 90) {
    	this.angle += 2.5; 
  	}
};

Bird.prototype.flap = function() {  
    this.body.velocity.y = -400; 
    // rotate the bird to -40 degrees
    this.game.add.tween(this).to({angle: -40}, 100).start();
};
 
module.exports = Bird;
