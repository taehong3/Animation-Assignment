class mega{
    constructor(game) {
        this.game = game
        this.x = 120
        this.y = 150
        this.spritesheet = ASSET_MANAGER.getAsset("./megaman3.png")
        this.Animator = new Animator(this.spritesheet,154.5, 1.5, 47, 47, 4, 0.1, 4 , false, true); 
        //pritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
    }
      update() {
        if(this.game.right){
            this.x+=10;
        }
      }
    
      draw(ctx) {
        this.Animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
      }
    }
  

