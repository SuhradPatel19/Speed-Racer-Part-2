class Game {
  constructor() { }

  getState() {
    var stateInfo = database.ref("gameState")
    stateInfo.on("value", function (data) {
      myGamestate = data.val()
    })

  }


  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  // GAMESTATE=1
  start() {
    myform = new Form()
    myform.display()
    myplayer = new Player
    myplayer.getCount() 

    car1 = createSprite(width/2 - 100, height/2 - 100)
    car1.addImage("car1", car1Image)
    car1.scale=0.06

    car2 = createSprite(width/2 + 100, height/2 - 100)
    car2.addImage("car12", car2Image)
    car2.scale=0.06

    cars = [car1,car2]
    
  }

  // GAMESTATE=2
  play() {
    myform.hide()
    myform.titleimg.position(40,60)
    myform.titleimg.class("gameTitle2")
    drawSprites()
    


  }
  // GAMESTATE=3
  end() {


  }

}
