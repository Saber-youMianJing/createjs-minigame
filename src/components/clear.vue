<template>
  <div class="clear">
    <canvas id="clearCanvas" width="750" height="1183" ></canvas>
  </div>
</template>

<script>

export default {
  name: 'clear',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      clientHeight: window.screen.height/window.screen.width*750
    }
  },
  created(){

  },
  mounted(){
    //hammerjs
    // var hammertime = new Hammer(document.getElementById("popel"));
    // hammertime.add(new Hammer.Pinch())
    // hammertime.on('pinchin', function(ev) {
	  //    popelRight()
    //    hammertime.destroy()
    // });

    //canve
    var canvas = document.getElementById("clearCanvas");
    var stage= new createjs.Stage(canvas);
    createjs.Touch.enable(stage);

    //绘制箭头
    var stuffContainer = new createjs.Container();
    stage.addChild(stuffContainer);
    var stuff=
    [{id:'bow',src:require('../assets/img/clear/bow.png')},
    {id:'dress',src:require('../assets/img/clear/dress.png')},
    {id:'lollipop',src:require('../assets/img/clear/lollipop.png')},
    {id:'scarf',src:require('../assets/img/clear/scarf.png')},
    {id:'shoes',src:require('../assets/img/clear/shoes.png')},
    {id:'sock',src:require('../assets/img/clear/sock.png')},
    {id:'arrow',src:require('../assets/img/clear/arrow.png')}
    ];

    var stuffArr = [];
    // 图片资源加载
    var load = new createjs.LoadQueue(false);
    load.loadManifest(stuff);
    load.on('complete',init);

    function init(){
      //initial all stuff image and their positions
      var bow = new createjs.Bitmap(load.getResult('bow').src),
          dress = new createjs.Bitmap(load.getResult('dress').src),
          lollipop = new createjs.Bitmap(load.getResult('lollipop').src),
          shoes = new createjs.Bitmap(load.getResult('shoes').src),
          sock = new createjs.Bitmap(load.getResult('sock').src),
          scarf = new createjs.Bitmap(load.getResult('scarf').src);

      bow.set({x:195,y:830,originX:195,originY:830,width:80,height:87,dir:'l'});
      dress.set({x:440,y:390,originX:440,originY:390,width:117,height:137,dir:'r'});
      lollipop.set({x:475,y:680,originX:475,originY:680,width:100,height:125,dir:'r'})
      shoes.set({x:240,y:350,originX:240,originY:350,width:58,height:131,dir:'l'});
      sock.set({x:236,y:690,originX:236,originY:690,width:90,height:80,dir:'l'});
      scarf.set({x:553,y:585,originX:553,originY:585,width:90,height:100,dir:'r'});

      stuffArr.push(bow);
      stuffArr.push(dress);
      stuffArr.push(lollipop);
      stuffArr.push(shoes);
      stuffArr.push(sock);
      stuffArr.push(scarf);
      stuffContainer.addChild(bow,dress,lollipop,scarf,shoes,sock);
      // setDragAction();
      // drawpopleup();

      //assign 3 mouse events for all stuff in stuffArray
      stuffArr.forEach(function(s){
        setRadius(s);
        s.addEventListener("mousedown",mouseDown);
        s.addEventListener("pressmove",mouseMove);
        s.addEventListener("pressup",mouseUp);
      });
      
      function setRadius(s){
        var x = s.originX + Math.floor(s.width/2),
            y = s.originY + Math.floor(s.height/2);
        s.set({radiusX:x, radiusY:y});
       
      }

      function mouseDown(e){
        var s = e.target;
        return;
      }

      function mouseMove(e){
        var s = e.target;
        s.x = e.stageX - Math.floor(s.width/2);
        s.y = e.stageY - Math.floor(s.height/2);
      }

      function mouseUp(e){
        var s = e.target;
        var dx = s.x + Math.floor(s.width/2) - s.radiusX,
            dy = s.y + Math.floor(s.height/2) - s.radiusY,
            dis = Math.sqrt(dx*dx+dy*dy);
        console.log(dis);
        if(dis <= 150 || (dx > 0 && s.dir === 'l') || (dx < 0 && s.dir ==='r')){
          resetPosition(s);
        }else{
          removeStaff(s);
        }
      }

      function resetPosition(s){
        createjs.Tween.get(s, { loop: false }).to({ x: s.originX, y:  s.originY ,alpha:1}, 600, createjs.Ease.getPowInOut(3));
      }
      
      function removeStaff(s,callback){
        var w = window.innerWidth;
        var angleDeg = Math.atan2(s.y + Math.floor(s.height/2) - s.radiusY  , s.x + Math.floor(s.width/2) - s.radiusX) * 180 / Math.PI -45;
        var endX = s.dir === 'l' ? s.x-w:s.x+w,
            endY = s.radiusY - (w + s.x + Math.floor(s.width/2) - s.radiusX)*Math.cos(angleDeg) ;
        createjs.Tween.get(s, { loop: false }).to({ x:endX, y:  endY ,alpha:1}, 600, createjs.Ease.getPowInOut(3))
        //.wait(50).call(
        //   function(){
        //     stuffContainer.removeChild(s);
        //   });
      }

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", stage);
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clear{height: 1183px;width: 750px;background: url("../assets/img/clear/bg.jpg") no-repeat;background-size: 100% 100%;}
</style>
