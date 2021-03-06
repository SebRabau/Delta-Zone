var DeltaZone = DeltaZone || {};
 
DeltaZone.Boot = function(){};
 
DeltaZone.Boot.prototype = {
  preload: function() {
  	//assets used in the loading screen
    this.load.image("logo", "../assets/logo.png");
    this.load.image("preloadBar", "../assets/preloadBar.png");
  },
  create: function() {
    this.game.stage.backgroundColor = "#fff";
 
    //scaling
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
	//centre game
	this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
 
	//auto adjust screen size
	this.scale.updateLayout(true);
 
	//initialise physics system
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start("Preload");
  }
};