var FPS = 60;
var useMap = 0;

setInterval("main();",1000/FPS);


function main(){
	keyController();
	player("#hero");
}

function nowPix(Objx,Objy){
	nPix = Math.floor((Objx+25)/50);
	nPiy = Math.floor(( (Objy+50)/50 ) - 1);
	nowPosition = new Array();
	nowPosition['x'] = nPix;
	nowPosition['y'] = nPiy;
	return nowPosition;
}

