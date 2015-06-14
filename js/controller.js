var keyPress = new Array();
window.onkeydown = function(e){keyPress[e.keyCode] = true;}
window.onkeyup = function(e){keyPress[e.keyCode] = false;}

function keyController(){
		for( keyCode in keyPress)
			if(keyPress[keyCode])switch(keyCode){
				case '68':d();break;//→
				case '65':a();break;//←
				case '87':w();break;//↑
				case '32':w();break;//↑
				case '83':s();break;//↑
				default: console.log(keyCode); break;
			}
}

function w(){jump();}
function d(){goRight();}
function a(){goLeft();}
function s(){}