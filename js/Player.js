class Player {
  constructor() {
   
  }

  getCount() {
    var CountInfo = database.ref("playerCount")
    CountInfo.on("value", function (data) {
      myplayerCount = data.val()
    })

  }


  updateCount(count) {
    database.ref("/").update({
     playerCount: count
    })
  }

  
}
