<template >
  <div class="carbonMap">
    <div class="carbonBox">
    <div class="head">
      <h1>
        <a style="color: white; font-size: medium"
          >中国各省农作物碳排放可视化</a
        >
      </h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
    </div>

    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 16vw">
            <div class="alltitle">西南地区农田生态系统的碳排放(万吨)</div>
            <div class="allnav" id="echart1"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 16vw">
            <div class="alltitle">西南地区化肥使用的碳排放(万吨)</div>
            <div class="allnav" id="echart2"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 16vw">
            <div style="height: 100%; width: 100%">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li class="pulll_left counter">9982.96</li>
                <li class="pulll_left counter">21938.67</li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left">2019年农作物碳排放总量(万吨)</li>
                <li class="pulll_left">2019年农作物碳排放强度(千克/公顷)</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1">
              <!-- <img src="../../../assets/chinaMap/picture/lbx.png" /> -->
              <img src="../../../assets/chinaMap/picture/lbx.png" />
            </div>
            <div class="map2">
              <img src="../../../assets/chinaMap/picture/jt.png" />
            </div>
            <div class="map3">
              <img src="../../../assets/chinaMap/picture/map.png" />
            </div>
            <div class="map4" id="map_1"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style=" height: 16vw">
            <div class="alltitle">西南地区碳排放强度(吨/公顷)</div>
            <div class="allnav" id="echart4"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style=" height: 16vw">
            <div class="alltitle">西南地区农药使用的碳排放(万吨)</div>
            <div class="allnav" id="echart5"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style=" height: 16vw">
            <div class="alltitle">西南地区农业灌溉产生的碳排放(万吨)</div>
            <div class="allnav" id="echart6"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="back"></div>
  </div>
  </div>

</template>

<script>
import "@/utils/js";
export default {
  name: "carbonMap",
  data() {
    return {
      currentTime: "",
    };
  },

  methods: {
    getCurrentTime() {
      setInterval(() => {
        const dt = new Date();
        const y = dt.getFullYear();
        const mt = dt.getMonth() + 1;
        const day = dt.getDate();
        const h = dt.getHours();
        const m = dt.getMinutes();
        const s = dt.getSeconds();
        this.currentTime = `${y}/${this.AppendZero(mt)}/${this.AppendZero(
          day
        )} ${this.AppendZero(h)}:${this.AppendZero(m)}:${this.AppendZero(s)}`;
      }, 1000);
    },
    AppendZero(obj) {
      if (obj < 10) return "0" + obj;
      else return obj;
    },
  },
  mounted() {
    this.getCurrentTime();
  },
};
</script>

<style lang="less" scoped>
// @charset "utf-8";
@baseFontSize: 5vw;
/* CSS Document */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  box-sizing: border-box;
}
*,


html {
  font-size: 16px; /* 使用固定的字体大小，例如16px */
}

@font-face {
  font-family: electronicFont;
  // src: url(../chinaMap/font/DS-DIGIT.TTF);
  src: url(../../../assets/chinaMap/font/DS-DIGIT.TTF);
}

.carbonMap {
  background: #000d4a url(../../../assets/chinaMap/images/bg.jpg) center top;
  background-size: cover;
  color: #666;
  font-size: 0.1 *@baseFontSize;
  color: #222;
  font-family: "微软雅黑";
  width: 100%;
  // height: 100vh;
}
.carbonBox{
  padding-left: 9.5vh;
}
li {
  list-style-type: none;
}
/* table{} */
i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}
img {
  border: none;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #399bff;
}
a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}
ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
a:hover {
  color: #06c;
  text-decoration: none !important;
}

.clearfix:after,
.clearfix:before {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}
/*谷哥滚动条样式*/

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: #5bc0de;
}
::-webkit-scrollbar-track {
  background-color: #ddd;
}

/***/
.canvas {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 99%;
  z-index: 1;
}

.allnav {
  height: calc(100% - 30px);
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 18px;
  z-index: 100000000;
  width: 100%;
  height: 100%;
  background: #1a1a1c;
  text-align: center;
}
.loadbox {
  position: absolute;
  width: 160px;
  height: 150px;
  color: #aaa;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -75px;
}
.loadbox img {
  margin: 10px auto;
  display: block;
  width: 40px;
}

.copyright {
  background: rgba(19, 31, 64, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.05);
  line-height: 0.5 *@baseFontSize;
  text-align: center;
  padding-right: 15px;
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.16 *@baseFontSize;
}

.head {
  height: 1.05 *@baseFontSize;
  background: url(../../../assets/chinaMap/images/head_bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  z-index: 100;
}
.head h1 {
  color: #fff;
  text-align: center;
  font-size: 0.4 *@baseFontSize;
  line-height: 0.8 *@baseFontSize;
}
.head h1 img {
  width: 1.5 *@baseFontSize;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2 *@baseFontSize;
}
.time {
  position: absolute;
  right: 0.15 *@baseFontSize;
  top: 0;
  line-height: 0.75 *@baseFontSize;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.3 *@baseFontSize;
  padding-right: 0.1 *@baseFontSize;
  font-family: electronicFont;
}

.mainbox {
  padding: 0.1 *@baseFontSize 0.1 *@baseFontSize 0 *@baseFontSize 0.1 *@baseFontSize;
}
/* .mainbox>ul{} */
.mainbox > ul > li {
  float: left;
  padding: 0 0.1 *@baseFontSize;
}

.mainbox > ul > li {
  width: 30%;
}
.mainbox > ul > li:nth-child(2) {
  width: 40%;
  padding: 0;
}

.boxall {
  border: 1px solid rgba(25, 186, 139, 0.17);
  padding: 0 0.2 *@baseFontSize 0.4 *@baseFontSize 0.15 *@baseFontSize;
  background: rgba(255, 255, 255, 0.04) url(../../../assets/chinaMap/images/line.png);
  background-size: 100% auto;
  position: relative;
  margin-bottom: 0.15 *@baseFontSize;
  z-index: 10;
}
.boxall:before,
.boxall:after {
  position: absolute;
  width: 0.1 *@baseFontSize;
  height: 0.1 *@baseFontSize;
  content: "";
  border-top: 2px solid #02a6b5;
  top: 0;
}
.boxall:before,
.boxfoot:before {
  border-left: 2px solid #02a6b5;
  left: 0;
}
.boxall:after,
.boxfoot:after {
  border-right: 2px solid #02a6b5;
  right: 0;
}
.alltitle {
  font-size: 0.2 *@baseFontSize;
  color: #fff;
  text-align: center;
  line-height: 0.5 *@baseFontSize;
}

.boxfoot {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.boxfoot:before,
.boxfoot:after {
  position: absolute;
  width: 0.1 *@baseFontSize;
  height: 0.1 *@baseFontSize;
  content: "";
  border-bottom: 2px solid #02a6b5;
  bottom: 0;
}

.bar {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.15 *@baseFontSize;
}
.barbox li,
.barbox2 li {
  width: 50%;
  text-align: center;
  position: relative;
  z-index: 100;
}
.barbox:before,
.barbox:after {
  position: absolute;
  width: 0.3 *@baseFontSize;
  height: 0.1 *@baseFontSize;
  content: "";
}
.barbox:before {
  border-left: 2px solid #02a6b5;
  left: 0;
  border-top: 2px solid #02a6b5;
}
.barbox:after {
  border-right: 2px solid #02a6b5;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #02a6b5;
}
.barbox li:first-child:before {
  position: absolute;
  content: "";
  height: 50%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  right: 0;
  top: 25%;
}
.barbox {
  border: 1px solid rgba(25, 186, 139, 0.17);
  position: relative;
}
.barbox li {
  font-size: 0.7 *@baseFontSize;
  color: #ffeb7b;
  padding: 0.05 *@baseFontSize 0;
  font-family: electronicFont;
  font-weight: bold;
}
.barbox2 li {
  font-size: 0.19 *@baseFontSize;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.1 *@baseFontSize;
}

.map {
  position: relative;
  height: 7.2 *@baseFontSize;
  z-index: 9;
}
.map4 {
  width: 200%;
  height: 7 *@baseFontSize;
  position: relative;
  left: -50%;
  top: 4%;
  margin-top: 0.2 *@baseFontSize;
  z-index: 5;
}
.map1,
.map2,
.map3 {
  position: absolute;
  opacity: 0.5;
}
.map1 {
  width: 6.43 *@baseFontSize;
  z-index: 2;
  top: 0.45 *@baseFontSize;
  left: 0.7 *@baseFontSize;
  animation: myfirst2 15s infinite linear;
}
.map2 {
  width: 5.66 *@baseFontSize;
  top: 0.85 *@baseFontSize;
  left: 1.2 *@baseFontSize;
  z-index: 3;
  opacity: 0.2;
  animation: myfirst 10s infinite linear;
}
.map3 {
  width: 5.18 *@baseFontSize;
  top: 1.07 *@baseFontSize;
  left: 1.4 *@baseFontSize;
  z-index: 1;
}

.tabs {
  text-align: center;
  padding: 0.1*@baseFontSize 0 0 0;
}
.tabs a {
  position: relative;
  display: inline-block;
  margin-left: 1px;
  padding: 0.05 *@baseFontSize 0.2 *@baseFontSize;
  color: #898989;
  transition: all 0.3s ease-out 0s;
  font-size: 14px;
}
.tabs li {
  display: inline-block;
}
.tabs a:after {
  position: absolute;
  width: 1px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  content: "";
  margin-left: 0;
  right: -1px;
  margin-top: 7px;
}
.tabs li a.active {
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.tit02 {
  text-align: center;
  margin: 0.1 *@baseFontSize 0;
  position: relative;
}
.tit02 span {
  border: 1px solid rgba(25, 186, 139, 0.17);
  letter-spacing: 2px;
  padding: 0.01 *@baseFontSize 0.2 *@baseFontSize;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.18 *@baseFontSize;
  color: #49bcf7;
}
.tit02:before,
.tit02:after {
  position: absolute;
  width: 26%;
  height: 1px;
  background: rgba(25, 186, 139, 0.2);
  content: "";
  top: 0.12 *@baseFontSize;
}
.tit02:after {
  right: 0;
}
.tit02:before {
  left: 0;
}

.wrap {
  height: 2.54 *@baseFontSize;
  overflow: hidden;
}
.wrap li {
  line-height: 0.42 *@baseFontSize;
  height: 0.42 *@baseFontSize;
  font-size: 0.18 *@baseFontSize;
  text-indent: 0.24 *@baseFontSize;
  margin-bottom: 0.1 *@baseFontSize;
}
.wrap li p {
  border: 1px solid rgba(25, 186, 139, 0.17);
  color: rgba(255, 255, 255, 0.6);
}
.sy {
  float: left;
  width: 33%;
  height: 95%;
  margin-top: 0.25 *@baseFontSize;
}

.adduser {
  height: 1.5 *@baseFontSize;
  overflow: hidden;
}
.adduser li {
  height: 0.5 *@baseFontSize;
}
.adduser img {
  width: 0.4 *@baseFontSize;
  border-radius: 0.5 *@baseFontSize;
  margin-right: 0.1 *@baseFontSize;
  display: inline-block;
  vertical-align: middle;
}
.adduser span {
  line-height: 0.5 *@baseFontSize;
  font-size: 0.18 *@baseFontSize;
  color: rgba(255, 255, 255, 0.6);
}

.sycm ul {
  margin-left: -0.5 *@baseFontSize;
  margin-right: -0.5 *@baseFontSize;
  padding: 0.16 *@baseFontSize 0;
}
.sycm li {
  float: left;
  width: 33.33%;
  text-align: center;
  position: relative;
}
.sycm li:before {
  position: absolute;
  content: "";
  height: 30%;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  right: 0;
  top: 15%;
}
.sycm li:last-child:before {
  width: 0;
}

.sycm li h2 {
  font-size: 0.3 *@baseFontSize;
  color: #c5ccff;
}
.sycm li span {
  font-size: 0.18 *@baseFontSize;
  color: #fff;
  opacity: 0.5;
}

@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}

/*Plugin CSS*/
.str_wrap {
  overflow: hidden;
  width: 100%;
  position: relative;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.str_move {
  white-space: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
}
.str_move_clone {
  display: inline-block;
  vertical-align: top;
  position: absolute;
  left: 100%;
  top: 0;
}
.str_vertical .str_move_clone {
  left: 0;
  top: 100%;
}
.str_down .str_move_clone {
  left: 0;
  bottom: 100%;
}
.str_vertical .str_move,
.str_down .str_move {
  white-space: normal;
  width: 100%;
}
.str_static .str_move,
.no_drag .str_move,
.noStop .str_move {
  cursor: inherit;
}
.str_wrap img {
  max-width: none !important;
}
</style>