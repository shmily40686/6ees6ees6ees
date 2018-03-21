class ForagerBee extends Bee {
  // TODO..
  constructor(){
  	super();
  	this.age = 10 ;
  	this.canFly = true;
  	this.job = 'find pollen'
  	this.treasureChest = [];
  }
  forage(){
  	this.treasureChest.push('treasure');
  }
};
