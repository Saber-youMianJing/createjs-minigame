<template>
  <div class="color" style="background-color:#f76e0e;height:1206px;width:100%">
    <div class="mix">
      <canvas id="myCanvas" width="750" height="1183" ></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mix',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
  },
  mounted(){
    var canvas = document.getElementById("myCanvas");
    var stage= new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    //加载图片
    var Arrow = new createjs.Container()
    var Fruit = new createjs.Container()
    stage.addChild(Arrow)
    stage.addChild(Fruit)
    var Arrowimg=
    [{id:'dwon',src:require('../assets/img/mix/down.png')},
    {id:'up',src:require('../assets/img/mix/up.png')},
    {id:'blue',src:require('../assets/img/mix/blueball.png')},
    {id:'yellow',src:require('../assets/img/mix/yellowball.png')},
    {id:'popelball',src:require('../assets/img/mix/popelball.png')},
    {id:'redball',src:require('../assets/img/mix/redball.png')},
    {id:'yes',src:require('../assets/img/mix/yes.png')},
    {id:'greenball',src:require('../assets/img/mix/greenball.png')},
    {id:'orangeball',src:require('../assets/img/mix/orangeball.png')},
    {id:'grape',src:require('../assets/img/mix/putao.png')},
    {id:'apple',src:require('../assets/img/mix/apple.png')},
    {id:'orange',src:require('../assets/img/mix/orange.png')}];
    var load = new createjs.LoadQueue();
    load.loadManifest(Arrowimg);
    load.on('complete',start);
    function start(){
      var rmove = true
      var bmove = true
      var ymove = true
      var grape =  new createjs.Bitmap(Arrowimg[9].src);
      var apple =  new createjs.Bitmap(Arrowimg[10].src);
      var orange = new createjs.Bitmap(Arrowimg[11].src);
      var downArrow = new createjs.Bitmap(Arrowimg[0].src)
      var upArrow = new createjs.Bitmap(Arrowimg[1].src)
      var redball = new createjs.Bitmap(Arrowimg[5].src)
      var popelball = new createjs.Bitmap(Arrowimg[4].src)
      var greenball = new createjs.Bitmap(Arrowimg[7].src)
      var orangeball = new createjs.Bitmap(Arrowimg[8].src)
      var popelYes = new createjs.Bitmap(Arrowimg[6].src)
      redball.x = 289
      redball.y = 323
      var blueball = new createjs.Bitmap(Arrowimg[2].src)
      blueball.x = 500
      blueball.y = 693
      var yellowball = new createjs.Bitmap(Arrowimg[3].src)
      yellowball.x = 68
      yellowball.y = 693
      Arrow.addChild(downArrow,upArrow,redball,blueball,yellowball)
      //拖拽
      var drawpopledown = {
        disx : 0,
        disy : 0,
        nx : 289,
        ny : 323,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopledown.disy = event.stageY
        },
        pressmoveF:function(event){
          if (rmove) {
            redball.y = drawpopledown.ny+event.stageY - drawpopledown.disy
            redball.x = drawpopledown.nx+(event.stageY - drawpopledown.disy)*.57
            if (drawpopledown.ny+event.stageY - drawpopledown.disy <= 323) {
              redball.y = 323
              redball.x = 289
            }else if (drawpopledown.ny+event.stageY - drawpopledown.disy >= 693){
              redball.y = 693
              redball.x = 500
            }
          }
        },
        pressupF:function(event) {
          drawpopledown.ny = redball.y
          drawpopledown.nx = redball.x
          if (drawpopledown.ny > 480 && drawpopledown.right) {
            drawpopledown.right = false
            createjs.Tween.get(redball, { loop: false })
            .to({ x: 500, y: 693 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            popelRight(popelball,500,693,415,822,apple,grape,popelball,twostep)
            redball.removeEventListener("mousedown",drawpopledown.mousedownF)
            redball.removeEventListener("pressmove",drawpopledown.pressmoveF)
            redball.removeEventListener("pressup",drawpopledown.pressupF)
            bmove = false
          }else if (drawpopledown.ny <=480 && drawpopledown.canmove){
            drawpopledown.ny = 323
            drawpopledown.nx = 289
            createjs.Tween.get(redball, { loop: false })
            .to({ x: 289, y: 323}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopledown.canmove = true
              })
          }
        },
        bindlistener:function(){
          redball.addEventListener("mousedown",this.mousedownF)
          redball.addEventListener("pressmove",this.pressmoveF)
          redball.addEventListener("pressup",this.pressupF)
        }
      }
      var drawpopleup = {
        disx : 0,
        disy : 0,
        nx : 500,
        ny : 693,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopleup.disy = event.stageY
        },
        pressmoveF:function(event){
          if (bmove) {
            blueball.y = drawpopleup.ny+event.stageY - drawpopleup.disy
            blueball.x = drawpopleup.nx+(event.stageY - drawpopleup.disy)*.57
            if (drawpopleup.ny+event.stageY - drawpopleup.disy <= 323) {
              blueball.y = 323
              blueball.x =289
            }else if (drawpopleup.ny+event.stageY - drawpopleup.disy >= 693){
              blueball.y = 693
              blueball.x = 500
            }
          }
        },
        pressupF:function(event) {
          drawpopleup.ny = blueball.y
          drawpopleup.nx = blueball.x
          if (drawpopleup.ny < 540 && drawpopleup.right) {
            drawpopleup.right = false
            createjs.Tween.get(blueball, { loop: false })
            .to({ x: 289, y: 323 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            blueball.removeEventListener("mousedown",drawpopleup.mousedownF)
            blueball.removeEventListener("pressmove",drawpopleup.pressmoveF)
            blueball.removeEventListener("pressup",drawpopleup.pressupF)
            popelRight(popelball,289,323,161,349,apple,grape,popelball,twostep)
            rmove = false
          }else if (drawpopleup.ny >= 540 && drawpopleup.canmove){
            drawpopleup.canmove = false
            drawpopleup.ny = 693
            drawpopleup.nx = 500
            createjs.Tween.get(blueball, { loop: false })
            .to({ x: 500, y: 693}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopleup.canmove = true
            })
          }
        },
        bindlistener:function(){
          blueball.addEventListener("mousedown",this.mousedownF)
          blueball.addEventListener("pressmove",this.pressmoveF)
          blueball.addEventListener("pressup",this.pressupF)
        }
      }
      var drawpopleleft = {
        disx : 0,
        disy : 0,
        nx : 500,
        ny : 693,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopleleft.disx = event.stageX
        },
        pressmoveF:function(event){
          if (bmove) {
            blueball.y = 693
            blueball.x = event.stageX -(drawpopleleft.disx - drawpopleleft.nx)
            if (event.stageX -(drawpopleleft.disx - drawpopleleft.nx) <= 68) {
              blueball.y = 693
              blueball.x = 68
            }else if (event.stageX -(drawpopleleft.disx - drawpopleleft.nx) >= 500){
              blueball.y = 693
              blueball.x = 500
            }
          }
        },
        pressupF:function(event) {
          drawpopleleft.ny = blueball.y
          drawpopleleft.nx = blueball.x
          if (drawpopleleft.nx < 320 && drawpopleleft.right) {
            drawpopleleft.right = false
            createjs.Tween.get(blueball, { loop: false })
            .to({ x: 68, y: 693 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            popelRight(greenball,68,693,204,796,orange,apple,greenball,threestep)
            yellowball.removeEventListener("mousedown",drawpopleright.mousedownF)
            yellowball.removeEventListener("pressmove",drawpopleright.pressmoveF)
            yellowball.removeEventListener("pressup",drawpopleright.pressupF)
            // popelRight(Arrowimg[4].src,289,323,161,349)
            ymove = false
          }else if (drawpopleleft.nx >= 320 && drawpopleleft.canmove){
            drawpopleleft.canmove = false
            drawpopleleft.nx = 500
            drawpopleleft.ny = 693
            createjs.Tween.get(blueball, { loop: false })
            .to({ x: 500, y: 693}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopleleft.canmove = true
            })
          }
        },
        bindlistener:function(){
          blueball.addEventListener("mousedown",this.mousedownF)
          blueball.addEventListener("pressmove",this.pressmoveF)
          blueball.addEventListener("pressup",this.pressupF)
        },
        unbindlister:function(){
          blueball.removeEventListener("mousedown",drawpopleup.mousedownF)
          blueball.removeEventListener("pressmove",drawpopleup.pressmoveF)
          blueball.removeEventListener("pressup",drawpopleup.pressupF)
          redball.removeEventListener("mousedown",drawpopledown.mousedownF)
          redball.removeEventListener("pressmove",drawpopledown.pressmoveF)
          redball.removeEventListener("pressup",drawpopledown.pressupF)
        }
      }
      var drawpopleright = {
        disx : 0,
        disy : 0,
        nx : 68,
        ny : 693,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopleright.disx = event.stageX
        },
        pressmoveF:function(event){
          if (ymove) {
            yellowball.y = 693
            yellowball.x = event.stageX -(drawpopleright.disx - drawpopleright.nx)
            if (event.stageX -(drawpopleright.disx - drawpopleright.nx) <= 68) {
              yellowball.y = 693
              yellowball.x = 68
            }else if (event.stageX -(drawpopleright.disx - drawpopleright.nx) >= 500){
              yellowball.y = 693
              yellowball.x = 500
            }
          }
        },
        pressupF:function(event) {
          drawpopleright.ny = yellowball.y
          drawpopleright.nx = yellowball.x
          if (drawpopleright.nx < 300 && drawpopleright.canmove) {
            drawpopleright.canmove = false
            drawpopleright.nx = 68
            drawpopleright.ny = 693
            createjs.Tween.get(yellowball, { loop: false })
            .to({ x: 68, y: 693}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopleright.canmove = true
            })
          }else if (drawpopleright.nx >= 300 && drawpopleright.right){
            drawpopleright.right = false
            createjs.Tween.get(yellowball, { loop: false })
            .to({ x: 500, y: 693 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            popelRight(greenball,500,693,415,822,orange,apple,greenball,threestep)
            blueball.removeEventListener("mousedown",drawpopleleft.mousedownF)
            blueball.removeEventListener("pressmove",drawpopleleft.pressmoveF)
            blueball.removeEventListener("pressup",drawpopleleft.pressupF)
            // popelRight(Arrowimg[4].src,289,323,161,349)
            ymove = false
          }
        },
        bindlistener:function(){
          yellowball.addEventListener("mousedown",this.mousedownF)
          yellowball.addEventListener("pressmove",this.pressmoveF)
          yellowball.addEventListener("pressup",this.pressupF)
        },
        unbindlister:function(){
          blueball.removeEventListener("mousedown",drawpopleleft.mousedownF)
          blueball.removeEventListener("pressmove",drawpopleleft.pressmoveF)
          blueball.removeEventListener("pressup",drawpopleleft.pressupF)
          yellowball.removeEventListener("mousedown",drawpopleright.mousedownF)
          yellowball.removeEventListener("pressmove",drawpopleright.pressmoveF)
          yellowball.removeEventListener("pressup",drawpopleright.pressupF)
        }
      }
      var drawpopleunder = {
        disx : 0,
        disy : 0,
        nx : 289,
        ny : 323,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopleunder.disy = event.stageY
        },
        pressmoveF:function(event){
          if (rmove) {
            redball.y = drawpopleunder.ny+event.stageY - drawpopleunder.disy
            redball.x = drawpopleunder.nx-(event.stageY - drawpopleunder.disy)*.57
            if (drawpopleunder.ny+event.stageY - drawpopleunder.disy <= 323) {
              redball.y = 323
              redball.x = 289
            }else if (drawpopleunder.ny+event.stageY - drawpopleunder.disy >= 693){
              redball.y = 693
              redball.x = 68
            }
          }
        },
        pressupF:function(event) {
          drawpopleunder.ny = redball.y
          drawpopleunder.nx = redball.x
          if (drawpopleunder.ny > 480 && drawpopleunder.right) {
            drawpopleunder.right = false
            createjs.Tween.get(redball, { loop: false })
            .to({ x: 68, y: 693 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            popelRight(orangeball,68,693,204,796,grape,orange,orangeball,success)
            redball.removeEventListener("mousedown",drawpopleunder.mousedownF)
            redball.removeEventListener("pressmove",drawpopleunder.pressmoveF)
            redball.removeEventListener("pressup",drawpopleunder.pressupF)
            ymove = false
          }else if (drawpopleunder.ny <=480 && drawpopleunder.canmove){
            drawpopleunder.ny = 323
            drawpopleunder.nx = 289
            createjs.Tween.get(redball, { loop: false })
            .to({ x: 289, y: 323}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopleunder.canmove = true
              })
          }
        },
        bindlistener:function(){
          redball.addEventListener("mousedown",this.mousedownF)
          redball.addEventListener("pressmove",this.pressmoveF)
          redball.addEventListener("pressup",this.pressupF)
        }
      }
      var drawpopleabove = {
        disx : 0,
        disy : 0,
        nx : 68,
        ny : 693,
        canmove : true,
        right : true,
        mousedownF:function(event){
          drawpopleabove.disy = event.stageY
        },
        pressmoveF:function(event){
          if (ymove) {
            yellowball.y = drawpopleabove.ny+event.stageY - drawpopleabove.disy
            yellowball.x = drawpopleabove.nx-(event.stageY - drawpopleabove.disy)*.57
            if (drawpopleabove.ny+event.stageY - drawpopleabove.disy <= 323) {
              yellowball.y = 323
              yellowball.x =289
            }else if (drawpopleabove.ny+event.stageY - drawpopleabove.disy >= 693){
              yellowball.y = 693
              yellowball.x = 68
            }
          }
        },
        pressupF:function(event) {
          drawpopleabove.ny = yellowball.y
          drawpopleabove.nx = yellowball.x
          if (drawpopleabove.ny < 540 && drawpopleabove.right) {
            drawpopleabove.right = false
            createjs.Tween.get(yellowball, { loop: false })
            .to({ x: 289, y: 323 ,alpha:0}, 800, createjs.Ease.getPowInOut(4))
            yellowball.removeEventListener("mousedown",drawpopleabove.mousedownF)
            yellowball.removeEventListener("pressmove",drawpopleabove.pressmoveF)
            yellowball.removeEventListener("pressup",drawpopleabove.pressupF)
            popelRight(orangeball,289,323,161,349,grape,orange,orangeball,success)
            rmove = false
          }else if (drawpopleabove.ny >= 540 && drawpopleabove.canmove){
            drawpopleabove.canmove = false
            drawpopleabove.ny = 693
            drawpopleabove.nx = 68
            createjs.Tween.get(yellowball, { loop: false })
            .to({ x: 68, y: 693}, 800, createjs.Ease.getPowInOut(4)).call(function(){
              drawpopleabove.canmove = true
            })
          }
        },
        bindlistener:function(){
          yellowball.addEventListener("mousedown",this.mousedownF)
          yellowball.addEventListener("pressmove",this.pressmoveF)
          yellowball.addEventListener("pressup",this.pressupF)
        },
        unbindlister:function(){
          redball.removeEventListener("mousedown",drawpopleunder.mousedownF)
          redball.removeEventListener("pressmove",drawpopleunder.pressmoveF)
          redball.removeEventListener("pressup",drawpopleunder.pressupF)
          yellowball.removeEventListener("mousedown",drawpopleabove.mousedownF)
          yellowball.removeEventListener("pressmove",drawpopleabove.pressmoveF)
          yellowball.removeEventListener("pressup",drawpopleabove.pressupF)
        }
      }
      //首屏
      onestep()
      //箭头
      function arrow(dx,dy,ux,uy,dr,ur,mdx,mdy,mux,muy){
        downArrow.alpha = 0
        downArrow.x = dx
        downArrow.y = dy
        downArrow.rotation = dr
        upArrow.alpha = 0
        upArrow.x = ux
        upArrow.y = uy
        upArrow.rotation = ur
        createjs.Tween.removeTweens(downArrow)
        createjs.Tween.removeTweens(upArrow)

        function arrowmove(){
          createjs.Tween.get(downArrow, { loop: false })
          .to({ alpha:1}, 1000, createjs.Ease.getPowInOut(4))
          createjs.Tween.get(downArrow, { loop: true })
          .to({ x: mdx, y: mdy}, 1000, createjs.Ease.getPowInOut(4))
          .to({ x: dx, y: dy}, 500, createjs.Ease.getPowInOut(4))
          createjs.Tween.get(upArrow, { loop: false })
          .to({ alpha:1}, 1000, createjs.Ease.getPowInOut(4))
          createjs.Tween.get(upArrow, { loop: true })
          .to({ x: mux, y: muy}, 1000, createjs.Ease.getPowInOut(4))
          .to({ x: ux, y: uy }, 500, createjs.Ease.getPowInOut(4))
          createjs.Ticker.setFPS(60);
          createjs.Ticker.addEventListener("tick", stage);
        }
        arrowmove()
      }
      //回调
      function popelRight(popelball,ballx,bally,yesx,yesy,newfruit,oldfruit,ballname,step){
        popelball.x = ballx
        popelball.y = bally
        popelball.alpha = 0
        popelYes.x = yesx
        popelYes.y = yesy
        Arrow.addChild(popelball,popelYes)
        createjs.Tween.get(popelball)
        .to({scaleX :1.1,scaleY:1.1,alpha:1,regX:10,regY:10},800,createjs.Ease.getPowInOut(4))
        .to({scaleX :1,scaleY:1,regX:0,regY:0},400,createjs.Ease.getPowInOut(4)).wait(100).call(
          function(){
            createjs.Tween.get(popelYes,{ loop: false })
            .to({scaleX :1.2,scaleY:1.2,alpha:1,regX:20,regY:20},800,createjs.Ease.getPowInOut(4))
            .to({scaleX :1,scaleY:1,regX:0,regY:0},800,createjs.Ease.getPowInOut(4)).wait(100).call(
              function(){
                neststep(newfruit,oldfruit,ballname)
                step()
              }
            )
          }
        )
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
      }
      function neststep(newfruit,oldfruit,ball) {
        fruitMove(newfruit,oldfruit)
        createjs.Tween.get(ball)
        .to({alpha:0},1000,createjs.Ease.getPowInOut(4))
        createjs.Tween.get(popelYes)
        .to({alpha:0},1000,createjs.Ease.getPowInOut(4))
        createjs.Tween.get(redball)
        .to({x :289,y:323,alpha:1},1000,createjs.Ease.getPowInOut(4))
        createjs.Tween.get(blueball)
        .to({x :500,y:693,alpha:1},1000,createjs.Ease.getPowInOut(4))
        createjs.Tween.get(yellowball)
        .to({x :68,y:693,alpha:1},1000,createjs.Ease.getPowInOut(4))

      }
      function onestep(){
        fruitMove(grape,orange)
        drawpopledown.nx = 289
        drawpopledown.ny = 323
        rmove = true
        arrow(392,470,482,614,0,0,397,478,476,604)
        drawpopledown.bindlistener()
        drawpopleup.bindlistener()
      }
      function twostep(){
        bmove = true
        arrow(212,796,374,797,-58,-60,222,800,364,798)
        drawpopleleft.unbindlister()
        drawpopleleft.bindlistener()
        drawpopleright.bindlistener()
      }
      function threestep(){
        ymove = true
        rmove = true
        arrow(326,448,253,588,60,60,324,454,258,583)
        drawpopleright.unbindlister()
        drawpopleunder.bindlistener()
        drawpopleabove.bindlistener()
      }
      function success(){
        drawpopledown.disy = 0
        drawpopleabove.unbindlister()
        drawpopleleft.unbindlister()
        drawpopleright.unbindlister()
        alert("哦哟，帮友弄老结棍额闹")
        onestep()
      }
      function fruitMove(fruit,old){
        fruit.alpha = 0
        fruit.x = 242
        fruit.y = 548
        Fruit.addChild(fruit)
        createjs.Tween.get(old, { loop: false })
        .to({alpha:0},800,createjs.Ease.getPowInOut(4)).call(function(){Fruit.removeChild(old)})
        createjs.Tween.get(fruit, { loop: false })
        .to({alpha:1},800,createjs.Ease.getPowInOut(4))
        createjs.Tween.get(fruit, { loop: true })
        .to({scaleX :1.1,scaleY:1.1,rotation:5},1500,createjs.Ease.getPowInOut(4))
        .to({scaleX :1,scaleY:1,rotation:0},1400,createjs.Ease.getPowInOut(4))
        .to({scaleX :1.1,scaleY:1.1,rotation:-5},1400,createjs.Ease.getPowInOut(1))
        .to({scaleX :1,scaleY:1,rotation:0},1500,createjs.Ease.getPowInOut(4))
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
      }
    }
  }
}
</script>

<style scoped>
  .mix{height: 1183px;width: 750px;background: url("../assets/img/mix/bg.jpg") no-repeat;background-size: 100% 100%;}
</style>
