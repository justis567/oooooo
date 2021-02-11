class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        cantestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allcontestant = data.val();
      })
    }
  }
  for(var plr in allContestant){
    var correctAns ="2"
    if(correctAns === allContestant[plr].answer)
    fil("green")
    else
    fill("red")
  }
  