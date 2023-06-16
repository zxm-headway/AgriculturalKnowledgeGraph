<template>
  <div class="carbonSink">

    <div class="carbonSinkBox">
    <div class="head">
      <h1>2019年西南地区碳汇可视化</h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
    </div>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: calc(58% - 0.15rem)">
            <div class="alltitle">常见农作物碳吸收率</div>
            <div class="boxnav" id="echarts4"></div>
          </div>
          <div class="boxall" style="height: calc(42% - 0.15rem)">
            <div class="alltitle">常见农作物经济产量(单位:万吨)</div>
            <div class="boxnav" id="echarts3"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: calc(20% - 0.15rem)">
            <ul class="row h100 clearfix">
              <li class="col-6">
                <div class="sqzs h100">
                  <p>2019年西南地区总碳汇量</p>
                  <h1><span>15654.2</span>万吨</h1>
                </div>
              </li>
              <li class="col-6">
                <ul class="row h100 clearfix">
                  <li class="col-4">
                    <div class="tit01">重庆碳汇占比</div>
                    <div class="piebox" id="pe01"></div>
                  </li>
                  <li class="col-4">
                    <div class="tit01">四川碳汇占比</div>
                    <div class="piebox" id="pe02"></div>
                  </li>
                  <li class="col-4">
                    <div class="tit01">贵州碳汇占比</div>
                    <div class="piebox" id="pe03"></div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="boxall" style="height: calc(38% - 0.15rem)">
            <div class="alltitle">西南地区碳吸收及碳汇量。(单位:万吨)</div>
            <div class="boxnav" id="echarts1"></div>
          </div>
          <div class="boxall" style="height: calc(42% - 0.15rem)">
            <div class="alltitle">常见农作物经济系数</div>
            <div class="boxnav" id="echarts2"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: calc(33.333% - 0.15rem)">
            <div class="alltitle">
              西南地区碳排放强度、碳吸收强度。(单位:千克/公顷)
            </div>
            <div class="boxnav" id="echarts5"></div>
          </div>
          <div class="boxall" style="height: calc(33.333% - 0.15rem)">
            <div class="alltitle">常见农作物生物产量(单位:万吨)</div>
            <div class="boxnav" id="">
              <table border="0" cellspacing="0">
                <tbody>
                  <tr>
                    <th></th>
                    <th>蔬菜</th>
                    <th>水稻</th>
                    <th>小麦</th>
                    <th>玉米</th>
                    <th>薯类</th>
                    <th>大豆</th>
                    <th>花生</th>
                    <th>油菜</th>
                  </tr>
                  <tr>
                    <th>重庆</th>
                    <td>3347.9</td>
                    <td>1082.2</td>
                    <td>17.3</td>
                    <td>624.0</td>
                    <td>405.2</td>
                    <td>58.7</td>
                    <td>31.8</td>
                    <td>199.6</td>
                  </tr>
                  <tr>
                    <th>四川</th>
                    <td>7731.9</td>
                    <td>3266.3</td>
                    <td>615.5</td>
                    <td>2655.4</td>
                    <td>776.0</td>
                    <td>278.4</td>
                    <td>159.0</td>
                    <td>1185.8</td>
                  </tr>
                  <tr>
                    <th>贵州</th>
                    <td>4558.1</td>
                    <td>941.8</td>
                    <td>82.5</td>
                    <td>580.8</td>
                    <td>432.6</td>
                    <td>54.3</td>
                    <td>27.0</td>
                    <td>309.0</td>
                  </tr>
                  <tr>
                    <th>云南</th>
                    <td>3840.2</td>
                    <td>1186.6</td>
                    <td>179.8</td>
                    <td>2300.0</td>
                    <td>240.4</td>
                    <td>135.3</td>
                    <td>15.7</td>
                    <td>216.4</td>
                  </tr>
                  <tr>
                    <th>西藏</th>
                    <td>129.1</td>
                    <td>48.0</td>
                    <td>10</td>
                    <td>6.5</td>
                    <td>0.3</td>
                    <td>0.1</td>
                    <td>0.1</td>
                    <td>22.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="boxall" style="height: calc(33.333% - 0.15rem)">
            <div class="alltitle">西南地区碳汇强度(单位:千克/公顷)</div>
            <div
              class="boxnav"
              id="echarts6"
              style="height: calc(100% - 0.3rem)"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>

</template>

<script>
import "@/utils/js2";
export default {
  name: "carbonSink",

  data() {
    return {
      currentTime: "",
      timer: null,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        const dt = new Date();
        const y = dt.getFullYear();
        const mt = dt.getMonth() + 1;
        const day = dt.getDate();
        const h = dt.getHours();
        const m = dt.getMinutes();
        const s = dt.getSeconds();

        this.currentTime = `${y}/${this.appendZero(mt)}/${this.appendZero(
          day
        )} ${this.appendZero(h)}:${this.appendZero(m)}:${this.appendZero(s)}`;
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timer);
    },
    appendZero(obj) {
      if (obj < 10) return "0" + "" + obj;
      else return obj;
    },
  },

  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
};
</script>

<style lang="less" scoped>
@charset "utf-8";
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
.carbonSink{
  // background: #000d4a url(../dataVisual/images/bg.jpg) center center;
  background: #000d4a url(../../../assets/dataVisual/images/bg.jpg) center center;
  background-size: cover;
  color: #fff;
  font-size: 0.1 * @baseFontSize;
  padding: 0px;
  margin: 0px;
  font-family: "微软雅黑";
}

.carbonSinkBox{
  padding-left: 9.5vh;
}

li {
  list-style-type: none;
}
@font-face {
  font-family: electronicFont;
  src: url(../../../assets/dataVisual/font/DS-DIGIT.TTF);
}
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

html,
body {
  height: 100%;
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

.loading {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 16px;
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
  color: #324e93;
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

.head {
  height: 1.05 * @baseFontSize;
  background: url(../../../assets/dataVisual/images/head_bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.head h1 {
  color: #fff;
  text-align: center;
  font-size: 0.4 * @baseFontSize;
  line-height: 0.8 * @baseFontSize;
  letter-spacing: -1px;
}
.head h1 img {
  width: 1.5 * @baseFontSize;
  display: inline-block;
  vertical-align: middle;
}
.time {
  position: absolute;
  right: 0.15 * @baseFontSize;
  top: 0;
  line-height: 0.75 * @baseFontSize;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.3 * @baseFontSize;
  padding-right: 0.1 * @baseFontSize;
  font-family: electronicFont;
}

.mainbox {
  padding: 0 0.2 * @baseFontSize 0 * @baseFontSize 0.2 * @baseFontSize;
  height: calc(100% - 1.05 * @baseFontSize);
}
.mainbox > ul {
  margin-left: -0.1 * @baseFontSize;
  margin-right: -0.1 * @baseFontSize;
  height: 100%;
}
.mainbox > ul > li {
  float: left;
  padding: 0 0.1 * @baseFontSize;
  height: 100%;
  width: 30%;
}
.mainbox > ul > li:nth-child(2) {
  width: 40%;
}

.boxall {
  padding: 0 0.2 * @baseFontSize 0.2 * @baseFontSize 0.2 * @baseFontSize;
  background: rgba(6, 48, 109, 0.5);
  position: relative;
  margin-bottom: 0.15 * @baseFontSize;
  z-index: 10;
}
.alltitle {
  font-size: 0.2 * @baseFontSize;
  color: #fff;
  line-height: 0.5 * @baseFontSize;
  position: relative;
  padding-left: 0.15 * @baseFontSize;
}
.alltitle:before {
  position: absolute;
  height: 0.2 * @baseFontSize;
  width: 4px;
  background: #49bcf7;
  border-radius: 5px;
  content: "";
  left: 0;
  top: 50%;
  margin-top: -0.1 * @baseFontSize;
}
.boxnav {
  height: calc(33vh - 0.5 * @baseFontSize);
}
.row > li {
  float: left;
  height: 100%;
}
.col-6 {
  width: 50%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33333%;
}
.h100 {
  height: 100%;
}
.tit01 {
  text-align: center;
  color: white;
  font-size: 0.16 * @baseFontSize;
  padding: 0.3 * @baseFontSize 0 0.02 * @baseFontSize 0;
}
.piebox {
  height: calc(100% - 0.5 * @baseFontSize);
  position: relative;
}
.piebox:before {
  width: 0.6 * @baseFontSize;
  height: 0.6 * @baseFontSize;
  content: "";
  border: 1px solid #49bcf7;
  border-radius: 1 * @baseFontSize;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -0.31 * @baseFontSize;
  margin-top: -0.31 * @baseFontSize;
  opacity: 0.7;
}

.sqzs {
  margin-right: 0.2 * @baseFontSize;
}
.sqzs p {
  padding: 0.2 * @baseFontSize 0 0.1 * @baseFontSize 0;
  font-size: 0.22 * @baseFontSize;
}
.sqzs h1 {
  height: calc(100% - 0.65 * @baseFontSize);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  color: #fef000;
  font-weight: normal;
  letter-spacing: 2px;
  font-size: 0.3 * @baseFontSize;
  justify-content: center;
  padding-bottom: 0.05 * @baseFontSize;
}
.sqzs h1 span {
  font-size: 0.5 * @baseFontSize;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

table {
  width: 100%;
  text-align: center;
}
table th {
  font-size: 0.16 * @baseFontSize;
  background: rgba(0, 0, 0, 0.1);
}
table td {
  font-size: 0.16 * @baseFontSize;
  color: rgba(255, 255, 255, 0.6);
}
table th,
table td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.1 * @baseFontSize 0;
}
</style>