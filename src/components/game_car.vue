<template>
  <div class="car" style="background-color: rgb(229, 60, 70)">
    <canvas id="game_Car" width="750" :height="clientHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
      clientHeight: window.screen.height/window.screen.width*750,
      playerCar:{
        x:450,
        y:465
      }
    }
  },
  created(){
    this.gameStart()
  },
  methods:{
    loadGame(){

    },
    gameStart(){

    }
  },
  mounted(){
    var _this = this;
    var stage = new createjs.Stage('game_Car');
    var w = stage.canvas.width;
    var h = stage.canvas.height;

    var queue = new createjs.LoadQueue(false);//静态图片预加载
    queue.loadManifest(
      [
        {id:"bg", src:require("../assets/img/car/bg.jpg")},
        {id:"mountain", src:require("../assets/img/car/mountain_3.png")},
        {id:"track", src:require("../assets/img/car/track.png")},
        {id:"car1", src:require("../assets/img/car/car1.png")},
        {id:"car2", src:require("../assets/img/car/car2.png")},
        {id:"player_car", src:require("../assets/img/car/player_car.png")},
      ]
    );
    queue.on("progress", loading, this);//监听资源加载情况
    function loading(e){
      // console.log(Number(e.loaded*100).toFixed()+'%');
    }

    // function toPercent(point){
    //   var str=Number(point*100).toFixed(1);
    //   str+="%";
    //   return str;
    // }

    queue.on("complete", loaded, this); //加载完成

    function getImg(id){
      return new createjs.Bitmap(queue.getResult(id).src);
    }
    var bg,
        mountain,
        track,
        car1,
        car1Container,
        car2,
        car2Container,
        player_car,
        playerContainer,
        mountain_speed

        var t_mountain
    function loaded(){//全部资源加载完成
      bg = getImg("bg")
      mountain = getImg("mountain");
      track = getImg("track");
      car1 = getImg("car1");
      car1Container = new createjs.Container();
      car2 = getImg("car2");
      car2Container = new createjs.Container();
      player_car = getImg("player_car");
      playerContainer = new createjs.Container();
      init()
    }
    function init(){
      // var bg = new createjs.Bitmap(queue.getResult('bg').src);
      bg.set({x:0, y:0});

      mountain.set({x:-910,y:825});
      mountain.rotation = -20;

      track.set({x:0,y:475});

      car1.set({x:0,y:0})
      car1Container.set({x:430,y:680});
      car1Container.addChild(car1)
      car2.set({x:0,y:0})
      car2Container.set({x:160,y:590});
      car2Container.addChild(car2)

      player_car.set({x:-15,y:0});
      playerContainer.set({x:450,y:465});
      // playerContainer.set({x:80,y:655})
      playerContainer.addChild(player_car)


      // stage.addChild(bg,track,mountain,car2,player_car,car1);
      stage.addChild(bg,track,mountain,car2Container,playerContainer,car1Container);

      //tween
      var tween = createjs.Tween;
      mountain_speed = 1500; //车道速度

      t_mountain = tween.get(mountain,{loop: true}).to({x:-300,y:600},mountain_speed).call(handleComplete);
      var t_car1 = tween.get(car1,{loop:true})
                          .to({x:25,y:-15},1300)
                          .to({x:0,y:0},1300)
      var t_car2 = tween.get(car2,{loop:true})
                          .to({x:-35,y:20},1100)
                          .to({x:0,y:0},1100)
      var t_player_car = tween.get(player_car,{loop:true})
                                .to({x:0,y:-12},1000)
                                .to({x:-15, y:0},1000)
      var t_playerContainer = tween.get(playerContainer,{loop:true})
                                    .to({x:80,y:655},5500)



    }

    function handleComplete(event) {
      // console.log(event);
        //Tween complete
    }


    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', gogogo);
    createjs.Ticker.setFPS(60);

    function gogogo(event) {
      // console.log(event);
      // stage.update(event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
