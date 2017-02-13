<template>
  <div class="home" ontouchmove="event.preventDefault()">
    <canvas id="homepage" width="750" :height="clientHeight" style="background:#ec3876;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      clientHeight: document.documentElement.clientHeight/document.documentElement.clientWidth*750
    }
  },
  mounted(){
    var that = this;
    var canvas = document.getElementById("homepage");
    var stage = new createjs.Stage(canvas);
    this.$parent.loaded?loaded():this.$parent.load.on('complete',loaded);
    function loaded(){
      var bg = new createjs.Bitmap(that.$parent.load.getResult('bg').src);
      var logo = new createjs.Bitmap(that.$parent.load.getResult('logo').src);
      var slogan = new createjs.Bitmap(that.$parent.load.getResult('slogan').src);
      var egg = new createjs.Bitmap(that.$parent.load.getResult('egg').src);
      var text = new createjs.Bitmap(that.$parent.load.getResult('text').src);
      var boy = new createjs.Bitmap(that.$parent.load.getResult('boy').src);
      var girl = new createjs.Bitmap(that.$parent.load.getResult('girl').src);
      var toys = new createjs.Bitmap(that.$parent.load.getResult('toys').src);
      var scrollbg = new createjs.Container();
      scrollbg.addChild(bg,egg.set({x:224,y:499,alpha:0}),slogan.set({x:42,y:83,alpha:0}));
      boy.addEventListener('click',()=>{
        that.$router.push('/game_car');
      });
      girl.addEventListener('click',()=>{
        that.$router.push('/mix');
      })
      stage.addChild(scrollbg);
      stage.addChild(text.set({x:150,y:472,alpha:0}));
      stage.addChild(boy.set({x:18,y:1343,alpha:0}));
      stage.addChild(girl.set({x:50,y:752,alpha:0}));
      stage.addChild(toys.set({x:0,y:that.clientHeight-471}));
      stage.addChild(logo.set({x:18,y:13}));
      createjs.Tween.get(slogan, { loop: false })
      .to({ alpha: 1}, 3000, createjs.Ease.getPowInOut(2))
      .wait(500)
      .call(function(){
        createjs.Tween.get(egg, { loop: false })
        .to({ alpha: 1}, 1000, createjs.Ease.getPowInOut(2))
        .wait(1000)
        .call(function(){
          createjs.Tween.get(scrollbg, { loop: false })
          .to({ y: -(1996-that.clientHeight) }, 2500, createjs.Ease.getPowInOut(2));
          createjs.Tween.get(boy, { loop: false })
          .to({ y: -(1996-that.clientHeight-1413) }, 2500, createjs.Ease.getPowInOut(2));
          createjs.Tween.get(girl, { loop: false })
          .to({ y: -(1996-that.clientHeight-822) }, 2500, createjs.Ease.getPowInOut(2));
        });
        createjs.Tween.get(toys, { loop: false })
        .to({ alpha: 0}, 1500, createjs.Ease.getPowInOut(2));
        createjs.Tween.get(boy, { loop: false })
        .to({ alpha: 1}, 1500, createjs.Ease.getPowInOut(2));
        createjs.Tween.get(girl, { loop: false })
        .to({ alpha: 1}, 1500, createjs.Ease.getPowInOut(2));
      });
      createjs.Tween.get(text, { loop: false })
      .to({ alpha: 1}, 3000, createjs.Ease.getPowInOut(2))
      .wait(500)
      .to({ alpha: 0}, 1000, createjs.Ease.getPowInOut(2));

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", stage);
      var star = new that.$parent.drawstar(4,60,'#fff').set({x:560,y:943,rotation:-35,regX:2,regY:2});
      var star2 = new that.$parent.drawstar(19,60,'#fcf8e2').set({x:130,y:1219,rotation:-35,regX:25,regY:25});
      var star3 = new that.$parent.drawstar(8,60,'#fff').set({x:597,y:1248,rotation:-35,regX:10,regY:10});
      var star4 = new that.$parent.drawstar(19,60,'#fcdbe6').set({x:564,y:1294,rotation:-35,regX:22,regY:22});
      var star5 = new that.$parent.drawstar(33,60,'#d2edfb').set({x:224,y:1385,rotation:-35,regX:36,regY:36});
      var star6 = new that.$parent.drawstar(5,60,'#fff').set({x:99,y:1481,rotation:-35,regX:7,regY:7});
      var star7 = new that.$parent.drawstar(8,60,'#fff').set({x:103,y:1735,rotation:-35,regX:10,regY:10});
      var star8 = new that.$parent.drawstar(16,60,'#d1f1b8').set({x:631,y:1773,rotation:-35,regX:20,regY:20});
      scrollbg.addChild(star); 
      scrollbg.addChild(star2);  
      scrollbg.addChild(star3); 
      scrollbg.addChild(star4); 
      scrollbg.addChild(star5); 
      scrollbg.addChild(star6); 
      scrollbg.addChild(star7); 
      scrollbg.addChild(star8); 
      createjs.Tween.get(star, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star2, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star3, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star4, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star5, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star6, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star7, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
      createjs.Tween.get(star8, { loop: true })
      .to({ scaleX: 0.9,scaleY: 0.9}, 1500, createjs.Ease.getPowInOut(2))
      .to({ scaleX: 1,scaleY: 1}, 1500, createjs.Ease.getPowInOut(2))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
