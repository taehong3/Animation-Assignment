var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./megaman3.png")
ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new mega(gameEngine));
	gameEngine.start();
});

