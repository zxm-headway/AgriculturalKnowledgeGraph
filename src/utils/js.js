// import $ from "@/assets/chinaMap/js/jquery.js";
// import echarts from "@/assets/chinaMap/js/echarts.min.js";

import $ from 'jquery'
import echarts from 'echarts';


$(function () {
  echarts_1();
  echarts_2();
  echarts_4();
  echarts_31();
  echarts_32();
  echarts_33();
  echarts_5();
  echarts_6();
  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));

    const option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["重庆", "四川", "贵州", "云南", "西藏"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [148.69, 409.5, 148.81, 348.06, 15.33],
          barWidth: "35%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart2"));

    const option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["重庆", "四川", "贵州", "云南", "西藏"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [81.57, 199.51, 74.6, 182.73, 4.32],
          barWidth: "35%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#27d08a",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart5"));

    const option = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "2%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["重庆", "四川", "贵州", "云南", "西藏"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [8.14, 22.84, 4.54, 23.39, 0.39],
          barWidth: "35%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            color: "#dddc6b",
          },
        },
      },
      legend: {
        top: "0%",
        // data: ['碳排放强度', '耕地面积'],
        data: ["碳排放强度"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true,
      },

      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)",
            },
          },

          data: ["重庆", "四川", "贵州", "云南", "西藏"],
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: "bottom",
          offset: 20,
        },
      ],

      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },

          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "碳排放强度",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#0184d5",
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)",
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
          },
          data: [444.41, 422.47, 271.48, 501.61, 564.62],
        },
        // {
        //         name: '耕地面积',
        //         type: 'line',
        //         smooth: true,
        //         symbol: 'circle',
        //         symbolSize: 5,
        //         showSymbol: false,
        //         lineStyle: {
        //
        //             normal: {
        // 				color: '#00d887',
        //                 width: 2
        //             }
        //         },
        //         areaStyle: {
        //             normal: {
        //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                     offset: 0,
        //                     color: 'rgba(0, 216, 135, 0.4)'
        //                 }, {
        //                     offset: 0.8,
        //                     color: 'rgba(0, 216, 135, 0.1)'
        //                 }], false),
        //                 shadowColor: 'rgba(0, 0, 0, 0.1)',
        //             }
        //         },
        // 			itemStyle: {
        // 			normal: {
        // 				color: '#00d887',
        // 				borderColor: 'rgba(221, 220, 107, .1)',
        // 				borderWidth: 12
        // 			}
        // 		},
        //         data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
        //
        //       }
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart6"));

    var dataStyle = {
      normal: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        //shadowBlur: 40,
        //shadowColor: 'rgba(40, 40, 40, 1)',
      },
    };
    var placeHolderStyle = {
      normal: {
        color: "rgba(255,255,255,.05)",
        label: { show: false },
        labelLine: { show: false },
      },
      emphasis: {
        color: "rgba(0,0,0,0)",
      },
    };
    const option = {
      color: ["#0f63d6", "#0f78d6", "#0f8cd6", "#0fa0d6", "#0fb4d6"],
      tooltip: {
        show: true,
        formatter: "{a} : {c} ",
      },
      legend: {
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 12,
        bottom: "3%",
        data: ["重庆", "四川", "贵州", "云南", "西藏"],
        textStyle: {
          color: "rgba(255,255,255,.6)",
        },
      },

      series: [
        {
          name: "重庆",
          type: "pie",
          clockWise: false,
          center: ["50%", "42%"],
          radius: ["59%", "70%"],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: 18.59,
              name: "01",
            },
            {
              value: 20,
              name: "invisible",
              tooltip: { show: false },
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "四川",
          type: "pie",
          clockWise: false,
          center: ["50%", "42%"],
          radius: ["49%", "60%"],
          itemStyle: dataStyle,
          hoverAnimation: false,
          data: [
            {
              value: 78.72,
              name: "02",
            },
            {
              value: 30,
              name: "invisible",
              tooltip: { show: false },
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "贵州",
          type: "pie",
          clockWise: false,
          hoverAnimation: false,
          center: ["50%", "42%"],
          radius: ["39%", "50%"],
          itemStyle: dataStyle,
          data: [
            {
              value: 30.75,
              name: "03",
            },
            {
              value: 35,
              name: "invisible",
              tooltip: { show: false },
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "云南",
          type: "pie",
          clockWise: false,
          hoverAnimation: false,
          center: ["50%", "42%"],
          radius: ["29%", "40%"],
          itemStyle: dataStyle,
          data: [
            {
              value: 51.23,
              name: "04",
            },
            {
              value: 40,
              name: "invisible",
              tooltip: { show: false },
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "西藏",
          type: "pie",
          clockWise: false,
          hoverAnimation: false,
          center: ["50%", "42%"],
          radius: ["20%", "30%"],
          itemStyle: dataStyle,
          data: [
            {
              value: 7.35,
              name: "05",
            },
            {
              value: 50,
              name: "invisible",
              tooltip: { show: false },
              itemStyle: placeHolderStyle,
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb1"));
    const option = {
      title: [
        {
          text: "柴油的碳排放(万吨)",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "14",
          },
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        top: "70%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["重庆", "四川", "贵州", "云南", "西藏"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "柴油的碳排放",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 12.57, name: "重庆" },
            { value: 27.86, name: "四川" },
            { value: 6.7, name: "贵州" },
            { value: 15.53, name: "云南" },
            { value: 1.96, name: "西藏" },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_32() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb2"));
    const option = {
      title: [
        {
          text: "农膜的碳排放(万吨)",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "14",
          },
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        top: "70%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["重庆", "四川", "贵州", "云南", "西藏"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "农膜的碳排放",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 22.05, name: "重庆" },
            { value: 63.84, name: "四川" },
            { value: 22.85, name: "贵州" },
            { value: 63.27, name: "云南" },
            { value: 0.76, name: "西藏" },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_33() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb3"));
    const option = {
      title: [
        {
          text: "机械的碳排放(万吨)",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "14",
          },
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        top: "70%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["重庆", "四川", "贵州", "云南", "西藏"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "机械用电的碳排放",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 5.77, name: "重庆" },
            { value: 16.73, name: "四川" },
            { value: 9.48, name: "贵州" },
            { value: 11.92, name: "云南" },
            { value: 0.55, name: "西藏" },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
});
