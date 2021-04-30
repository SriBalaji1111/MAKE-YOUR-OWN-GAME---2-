class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
	  player.getCount();
     
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
  
  
    player1 = createSprite(10,displayHeigth-100,20,20)
	player2 = createSprite(10,displayHeigth-50,20,20);
	var players = [player1,player2];
    
	player.getPlayerInfo();
	
    if(allPlayers !== undefined){
		var x;
        var y = displayHeigth-100;
		var index = 0;
		
		for(var plr in allPlayers){
			
			x = allPlayers[plr].distance 
			y += 50
			
			players[index].x = x;
			players[index].y = y;
			
			index += 1;
		}
		
		
	}
   
    drawSprites();
  }

  end(){
    
  }
}
