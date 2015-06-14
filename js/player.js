var Sc_height,Sc_width;
$(function(){	Sc_height = parseInt($("body").css('height'))-300;
				Sc_width  = parseInt($("body").css('width'));	});
var player_x = 0, player_y = 0, player_px;
var xAcceleration = 0, yAcceleration = 0;
var jumpJudge = false;


function player(player){
 	setPosition(player);
 	player_px = nowPix(player_x,player_y);
	gravity(player_y);
}

function setPosition(player){
	$(function(){	$(player).css('left',player_x+'px');
					$(player).css('top' ,player_y+'px'); });
}

function gravity(y){
	player_y += yAcceleration;
	if( testMap[useMap][player_px['y']+1][player_px['x']] == 0 ){yAcceleration++;jumpJudge=true;}
	else{yAcceleration = 0; if(jumpJudge==true)player_y = player_px['y']*50+45; jumpJudge = false; }
	//console.log(testMap[7][1]);
	//console.log(player_px['x']+":"+player_px['y']);
}

function jump(){if(!jumpJudge){yAcceleration = -20;}}
function goLeft(){if( testMap[useMap][player_px['y']][player_px['x']-1] == 0 )player_x-=10;}
function goRight(){if( testMap[useMap][player_px['y']][player_px['x']+1] == 0 )player_x+=10;}



function setUp(){
	//初期設定

var Map = document.getElementById("#Map");
	for( var y=0;y<testMap[0].length;y++)
		for(var x=0;x<testMap[0][y].length;x++){
		console.log("wahhoi");
			if(testMap[0][y][x]==1){
				var block = document.createElement('div');
				block.class = "block";
				block.style.backgroundColor = "gray";
				block.style.height = "50px";
				block.style.width = "50px";
				block.style.position = "absolute";
				block.style.top = ((y+1)*50)+"px";
				block.style.left =(x*50)+"px";
				document.body.appendChild(block);
			}
		}
	
}






