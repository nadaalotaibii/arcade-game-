
// Enemies our player must avoid
var Enemy = function (x,y,speed) {

      // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images 

     this.x = x;
     this.y = y;
     this.speed = speed;
     this.sprite = 'images/enemy-bug.png';
  

};
 
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     this.x += this.speed * dt;
   if (this.x > 490) {
         this.x = -100;
     }    

  if (
        
        player.y + 131 >= this.y + 90
        && player.x + 25 <= this.x + 88
        && player.y + 32 <= this.y + 135
        && player.x + 76 >= this.x + 22) {
        console.log(' COLLIDED !!! ');
        player.x = 202;
        player.y = 383;
    }


};
// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this

var Player = function(x,y,step) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {

   if (this.y > 383) {
        this.y = 383;
    }

    if (this.x > 402.5) {
        this.x = 402.5;
    }

    if (this.x < 0) {
        this.x = 0;
    }


 };
 
 Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

 };

 
 Player.prototype.handleInput = function(keyPress) {
  
    if (keyPress == 'left') {
        this.x -= this.step;
       
     }
 
     if (keyPress == 'up') {
        this.y -= this.step ;
     }
 
     if (keyPress == 'right') {
        this.x += this.step;
     }
 
     if (keyPress == 'down') {
        this.y += this.step ;
     }

   if (this.y + 63 <= 0) {        
        this.x = 202.5;
        this.y = 383;
        console.log('Good Job !!');
    }
          
};



   

var allEnemies = [new Enemy(),new Enemy(),new Enemy(),new Enemy(), new Enemy() ];
var player = new Player(202.5, 383, 50);
var enemy; 
 


 for (var i = 0; i <= 3; i++) {
        var enemy = new Enemy(0, Math.random() * 180 + 50, Math.random() * 300);

        allEnemies.push(enemy);
    }
 


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});