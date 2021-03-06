'use strict';
var Bird = require('../prefabs/bird'); 
var Ground = require('../prefabs/ground'); 
var PipeGroup = require('../prefabs/pipeGroup'); 
var Scoreboard = require('../prefabs/Scoreboard'); 

  function Play() {}
  Play.prototype = {
    create: function() {
      this.score = 0;
      // start the phaser arcade physics engine
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
 
      // give our world an initial gravity of 500
      this.game.physics.arcade.gravity.y = 1200;  
 
      // add the background sprite
      this.background = this.game.add.sprite(0,0,'background');
 
      // create and add a new Bird object
      this.bird = new Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);

      // create and add a group to hold our pipeGroup prefabs
      this.pipes = this.game.add.group();
      
      // create and add a new Ground object
      this.ground = new Ground(this.game, 0, 400, 335, 112);

      this.game.add.existing(this.ground);

      // keep the spacebar from propogating up to the browser
      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

      // add keyboard controls
      this.flapKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.flapKey.onDown.addOnce(this.startGame, this);
      this.flapKey.onDown.add(this.bird.flap, this.bird);


      // add mouse/touch controls
      //this.game.input.onDown.addOnce(this.startGame, this) ;      
      //this.game.input.onDown.add(this.bird.flap, this.bird); 


      

      this.scoreText = this.game.add.bitmapText(this.game.width/2, 10, 'flappyfont',this.score.toString(), 24);
      this.scoreText.visible = false;

      this.instructionGroup = this.game.add.group(); 
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 100,'getReady'));
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 325,'instructions'));
      this.instructionGroup.setAll('anchor.x', 0.5);
      this.instructionGroup.setAll('anchor.y', 0.5);  

      //this.game.add.existing(this.instructionGroup); 

      this.scoreSound = this.game.add.audio('score'); 

      
    },
    startGame: function() {  
        this.bird.body.allowGravity = true;
        this.bird.alive = true;

        // add a timer
        this.pipeGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
        this.pipeGenerator.timer.start();

        this.instructionGroup.destroy();
  },

    generatePipes: function() {  
      var pipeY = this.game.rnd.integerInRange(-100, 100);
      //Te devuelve el primer objeto de fuera del escenario
      var pipeGroup = this.pipes.getFirstExists(false);
      if(!pipeGroup) {
        pipeGroup = new PipeGroup(this.game, this.pipes);  
      }
      pipeGroup.reset(this.game.width + pipeGroup.width/2, pipeY);
    },
    update: function() {
      // enable collisions between the bird and the ground
      this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);
      this.pipes.forEach(function(pipeGroup) {
        this.checkScore(pipeGroup);
        this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
      }, this);
    },
    checkScore: function(pipeGroup) {  
      if(pipeGroup.exists && !pipeGroup.hasScored && pipeGroup.topPipe.world.x <= this.bird.world.x) {
          pipeGroup.hasScored = true;
          this.score++;
          this.scoreSound.play();
          this.scoreText.visible = true;
          this.scoreText.setText(this.score.toString());
      }
    },
    deathHandler: function() {      
      this.pipes.callAll('stop');
      this.pipeGenerator.timer.stop();
      this.ground.stopScroll();
      this.scoreboard = new Scoreboard(this.game);
      //this.game.add.existing(this.scoreboard);
      if (this.bird.alive){
        this.scoreboard.show(this.score);
      }
      this.bird.alive = false;
      this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
      this.bird.destroy();
      this.pipes.destroy();
  console.log(this);
      
      
      
    },
    shutdown: function() {  
      his.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
      this.bird.destroy();
      this.pipes.destroy();
      this.scoreboard.destroy();
    }
  };
 
  module.exports = Play