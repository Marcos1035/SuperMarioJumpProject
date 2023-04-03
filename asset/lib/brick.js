const Goomba = require('./goomba');
const Mushroom = require('./mushroom');

class Brick {
  constructor(ctx, x, y, length) {
    this.ctx = ctx;
    // Tamanho do Tijolo
    this.width = 20.0;
    this.height = 20.0;
    this.length = length;
    // Descendo a velocidade
    this.vy = 3.0;
    // Localização do tijolo na tela
    this.x = x;
    this.y = y;
    // Imagem de tijolo
    this.image =  document.getElementById("img-brick");

    // this. = this..bind(this);
    this.moveBrick = this.moveBrick.bind(this);
    this.drawBricks = this.drawBricks.bind(this);

  }

  moveBrick() {
    this.y += this.vy;
    this.drawBricks();
  }

  drawBricks() {
    for (var i = 0; i < this.length; i++) {
      this.ctx.drawImage(this.image, this.x + (this.width * i), this.y,
                                    this.width, this.height);
    }
  }

}
module.exports = Brick;
