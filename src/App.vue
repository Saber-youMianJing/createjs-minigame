<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      load:new createjs.LoadQueue(false),
      loaded:false
    }
  },
  created(){
  	var that = this;
  	var imgs=
    [
      {id:'bg',src:require('./assets/img/home/home-bg.jpg')},
      {id:'logo',src:require('./assets/img/home/logo.png')},
      {id:'slogan',src:require('./assets/img/home/slogan.png')},
      {id:'egg',src:require('./assets/img/home/egg.png')},
      {id:'text',src:require('./assets/img/home/text.png')},
      {id:'boy',src:require('./assets/img/home/boy.png')},
      {id:'girl',src:require('./assets/img/home/girl.png')},
      {id:'toys',src:require('./assets/img/home/toys.png')},
      {id:'puzzle-bg',src:require('./assets/img/puzzle/puzzle-bg.jpg')},
      {id:'p1',src:require('./assets/img/puzzle/p1.png')},
      {id:'p2',src:require('./assets/img/puzzle/p2.png')},
      {id:'p3',src:require('./assets/img/puzzle/p3.png')},
      {id:'p4',src:require('./assets/img/puzzle/p4.png')},
      {id:'p5',src:require('./assets/img/puzzle/p5.png')}
    ];
    // 图片资源加载
    that.load.loadManifest(imgs);
    that.load.on("progress", function() {
      clearInterval(t);
      loadprec.innerHTML = 30+Math.floor(that.load.progress*70)+'%';
    });
    that.load.on('complete',function(){
    	document.getElementById('loading').style.display = 'none';
    	that.loaded = true;
    });
  },
  methods:{
    drawstar(l,a,c){//l:长度，a:角度，c:颜色
      var star = new createjs.Shape();
      var point0 = [0,0];
      var point1 = [point0[0]+l*Math.sin(Math.PI/180*a/2),point0[1]+l*Math.cos(Math.PI/180*a/2)];
      var point2 = [point1[0]+l*Math.cos(Math.PI/180*(a/2-18)),point1[1]+l*Math.sin(Math.PI/180*(a/2-18))];
      var point3 = [point2[0]-l*Math.cos(Math.PI/180*(a/2+18)),point2[1]+l*Math.sin(Math.PI/180*(a/2+18))];
      var point4 = [point3[0]+l*Math.sin(Math.PI/180*(36-a/2)),point3[1]+l*Math.cos(Math.PI/180*(36-a/2))];
      var point5 = [point0[0],point4[1]-l*Math.sin(Math.PI/180*(54-a/2))];
      star.graphics.beginFill(c).moveTo(point0[0],point0[1]).lineTo(point1[0],point1[1]).lineTo(point2[0],point2[1]).lineTo(point3[0],point3[1]).lineTo(point4[0],point4[1]).lineTo(point5[0],point5[1]).lineTo(-point4[0],point4[1]).lineTo(-point3[0],point3[1]).lineTo(-point2[0],point2[1]).lineTo(-point1[0],point1[1]).lineTo(point0[0],point0[1]);
      return star;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:750px;
}
</style>
