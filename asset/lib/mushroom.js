class Mushroom {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    // tamanho do cogumelo
    this.width = 20.0;
    this.height = 20.0;
    this.length = 1.0;
    // Descendo a velocidade
    this.vy = 3.0;
    // gravidade
    // this.gravity = 0.2;
    // Mushroom location on canvas(depending on bricks location)
    this.x = x;
    this.y = y;
    // cogumelo image
    this.image =  document.getElementById("img-mushroom");

    // this. = this..bind(this);
    this.moveMushroom = this.moveMushroom.bind(this);
    this.drawMushroom = this.drawMushroom.bind(this);

  }

  moveMushroom() {
    this.y += this.vy;
    this.drawMushroom();
  }

  drawMushroom() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

}
module.exports = Mushroom;
