var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./megaman.png");
ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	canvas.focus();
	gameEngine.init(ctx);
	gameEngine.addEntity(new Megaman(gameEngine,350,550));
	gameEngine.start();
});

