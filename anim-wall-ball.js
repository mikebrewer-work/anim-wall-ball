


function animWallBall() {
  var animWallBall;
  var ball;
  var wt = 600;
  var ht = 400;

  animWallBall = {
    canvas : document.getElementById("anim-wall-ball"),
    stop : function() {
      clearInterval(this.interval);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    start : function() {
      this.canvas.width = wt;
      this.canvas.height = ht;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(function() {
        updateAnimWallBallArea(animWallBall, ball)
      }, (1000 / 60));
    }
  };

  var ball = {
    color : "#A2E3F6",
    radius : 20,
    posX : 20,
    posY : ht / 2,
    speed : 2,
    dirX : 1,
    dirY : 1,
    draw : function() {
      console.log(this.posX);
      animWallBall.context.fillStyle = this.color;
      animWallBall.context.beginPath();
      animWallBall.context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, true);
      animWallBall.context.fill();
    },
    newPos : function() {
      if (((this.posY + this.radius) > ht) || ((this.posY - this.radius) < 0)) {
        this.dirY = this.dirY * -1;
      } else if (((this.posX+ this.radius) > wt) || ((this.posX - this.radius) < 0)) {
        this.dirX = this.dirX * -1;
      }

      this.posX = this.posX + (this.speed * this.dirX);
      this.posY = this.posY + (this.speed * this.dirY);
    }
  };

  animWallBall.start();
}


function updateAnimWallBallArea(animWallBall, ball) {
  animWallBall.clear();
  ball.newPos();
  ball.draw();
}
