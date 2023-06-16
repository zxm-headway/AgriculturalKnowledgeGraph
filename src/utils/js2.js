
import $ from 'jquery'
import echarts from 'echarts';

$(function () {
  echarts_1();
  echarts_2();
  echarts_3();
  echarts_4();
  echarts_5();
  echarts_6();
  pe01();
  pe02();
  pe03();

  function echarts_1() {
    var myChart = echarts.init(document.getElementById("echarts1"));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        top: "20%",
        right: "70",
        bottom: "20",
        left: "50",
      },
      legend: {
        data: ["碳吸收量", "碳汇量"],
        right: "center",
        width: "100%",
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
      },

      xAxis: [
        {
          type: "category",
          data: ["重庆", "四川", "贵州", "云南", "西藏"],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: "14" },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位万",
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            fontSize: 14,
            color: "rgba(255,255,255,.6)",
          },
          axisLine: {
            min: 0,
            max: 10,
            lineStyle: { color: "rgba(255,255,255,.1)" },
          }, //左线色
        },
        {
          type: "value",
          name: "增速",
          show: true,
          axisLabel: {
            show: true,
            fontSize: 14,
            formatter: "{value}",
            color: "rgba(255,255,255,.6)",
          },
          axisTick: { show: false },
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } }, //右线色
          splitLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,.1)" },
          }, //x轴线
        },
      ],
      series: [
        {
          name: "碳吸收量",
          type: "bar",
          data: [2558.8, 7439.4, 2974.1, 3656.9, 95.2],
          barWidth: "15%",
          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#8bd46e",
                },
                {
                  offset: 1,
                  color: "#09bcb7",
                },
              ]),
            },
          },
          barGap: "0.2",
        },
        {
          name: "碳汇量",
          type: "line",
          yAxisIndex: 1,
          data: [2410.1, 7029.9, 2825.3, 3308.8, 79.8],
          lineStyle: {
            normal: {
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: "#fbc30d",
            },
          },
          smooth: true,
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts2"));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        // formatter:'{c}' ,
      },
      grid: {
        left: "0",
        top: "30",
        right: "10",
        bottom: "-20",
        containLabel: true,
      },
      legend: {
        data: ["经济系数"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },

      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            rotate: -90,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
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
          // splitNumber: 6,
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            formatter: "{value} %",
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
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
          name: "经济系数",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "rgba(228, 228, 126, 1)",
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
                    color: "rgba(228, 228, 126, .2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(228, 228, 126, 0)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(228, 228, 126, 1)",
              borderColor: "rgba(228, 228, 126, .1)",
              borderWidth: 12,
            },
          },
          data: [60, 45, 40, 40, 70, 34, 43, 25],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts3"));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: ["重庆", "四川", "贵州", "云南", "西藏"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
      },
      grid: {
        left: "0",
        right: "20",
        bottom: "0",
        top: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["蔬菜", "水稻", "小麦", "玉米", "薯类", "大豆", "花生", "油菜"],
        axisLine: {
          lineStyle: {
            color: "white",
          },
        },
        axisLabel: {
          //rotate:-90,
          formatter: function (value) {
            return value.split("").join("\n");
          },
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.3)",
          },
        },
      },

      yAxis: {
        type: "value",
        splitNumber: 4,
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          },
        },
        axisLine: { show: false },
      },

      series: [
        {
          name: "重庆",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#8bd46e",
            },
          },
          data: [2008.76, 487, 6.91, 249.59, 283.64, 19.97, 13.68, 49.89],
        },
        {
          name: "四川",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#f5804d",
              barBorderRadius: 0,
            },
          },
          data: [
            4639.13, 1469.82, 246.18, 1062.14, 543.23, 94.67, 68.37, 296.45,
          ],
        },
        {
          name: "贵州",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#248ff7",
              barBorderRadius: 0,
            },
          },
          data: [2734.84, 423.83, 32.98, 232.3, 302.87, 18.46, 11.62, 77.25],
        },
        {
          name: "云南",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#248ff7",
              barBorderRadius: 0,
            },
          },
          data: [2304.14, 534, 71.9, 920, 168.3, 46, 6.76, 54.1],
        },
        {
          name: "西藏",
          type: "bar",
          stack: "a",
          barWidth: "30",
          barGap: 0,
          itemStyle: {
            normal: {
              color: "#248ff7",
              barBorderRadius: 0,
            },
          },
          data: [77.49, 0.43, 19.19, 2.59, 0.19, 0.01, 0.02, 5.69],
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
    var myChart = echarts.init(document.getElementById("echarts5"));

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        top: "15%",
        right: "11%",
        bottom: "20",
        left: "10%",
      },
      legend: {
        data: ["碳排放强度", "碳吸收强度"],
        right: "center",
        top: 0,
        textStyle: {
          color: "#fff",
        },
        itemWidth: 12,
        itemHeight: 10,
      },
      xAxis: [
        {
          type: "category",

          data: ["重庆", "四川", "贵州", "云南", "西藏"],
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
          axisLabel: {
            textStyle: { color: "rgba(255,255,255,.7)", fontSize: "14" },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位1",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            show: true,
            color: "rgba(255,255,255,.6)",
          },
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } }, //左线色
        },
        {
          type: "value",
          name: "单位2",
          show: true,
          axisTick: { show: false },
          axisLabel: {
            show: true,
            formatter: "{value}",
            color: "rgba(255,255,255,.6)",
          },
          axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } }, //右线色
          splitLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,.1)" },
          }, //x轴线
        },
      ],
      series: [
        {
          name: "碳排放强度",
          type: "bar",
          data: [444.4, 422.4, 271.4, 501.6, 564.6],
          barWidth: "20%",

          itemStyle: {
            normal: {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fccb05",
                },
                {
                  offset: 1,
                  color: "#f5804d",
                },
              ]),
            },
          },
          barGap: "0",
        },
        {
          name: "碳吸收强度",
          type: "line",
          yAxisIndex: 1,
          data: [7648.0, 7675.1, 5425.8, 5270.1, 3506.8],
          lineStyle: {
            normal: {
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: "#ff3300",
            },
          },
          smooth: true,
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
    var myChart = echarts.init(document.getElementById("echarts4"));
    var myColor = [
      "#eb2100",
      "#eb3600",
      "#d0570e",
      "#d0a00e",
      "#34da62",
      "#00e9db",
      "#00c0e9",
      "#0096f3",
    ];
    const option = {
      grid: {
        left: "2%",
        top: "1%",
        right: "5%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          show: false,
        },
      ],
      yAxis: [
        {
          axisTick: "none",
          axisLine: "none",
          offset: "7",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },

          data: [
            "蔬菜",
            "水稻",
            "小麦",
            "玉米",
            "薯类",
            "大豆",
            "花生",
            "油菜",
          ],
        },
        {
          axisTick: "none",
          axisLine: "none",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          data: [0.45, 0.414, 0.485, 0.471, 0.423, 0.45, 0.45, 0.45],
        },
        {
          name: "单位：件",
          nameGap: "50",
          nameTextStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "16",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,0,0,0)",
            },
          },
          data: [],
        },
      ],
      series: [
        {
          name: "条",
          type: "bar",
          yAxisIndex: 0,
          data: [45, 41.4, 48.5, 47.1, 42.3, 45, 45, 45],
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: function (param) {
                return param.value + "%";
              },
              textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: "12",
              },
            },
          },
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03c893",
                },
                {
                  offset: 1,
                  color: "#0091ff",
                },
              ]),
              barBorderRadius: 15,
            },
          },
          z: 2,
        },
        {
          name: "白框",
          type: "bar",
          yAxisIndex: 1,
          barGap: "-100%",
          data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
          barWidth: 15,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,.2)",
              barBorderRadius: 15,
            },
          },
          z: 1,
        },
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
    var myChart = echarts.init(document.getElementById("echarts6"));

    const option = {
      title: {
        text: "5132",
        subtext: "总共",
        x: "center",
        y: "40%",
        textStyle: {
          color: "#fff",
          fontSize: 20,
          lineHeight: 10,
        },
        subtextStyle: {
          color: "#90979c",
          fontSize: 14,
          lineHeight: 10,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },

      visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
          //colorLightness: [0, 1]
        },
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          center: ["50%", "50%"],
          color: ["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: [
            {
              value: 7203.6,
              name: "重庆",
            },
            {
              value: 7252.6,
              name: "四川",
            },
            {
              value: 5154.3,
              name: "贵州",
            },
            {
              value: 4768.5,
              name: "云南",
            },
            {
              value: 2942.2,
              name: "西藏",
            },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",

          label: {
            normal: {
              formatter: ["{c|{c}}", "{b|{b}}"].join("\n"),
              rich: {
                c: {
                  color: "rgb(241,246,104)",
                  fontSize: 16,
                  fontWeight: "bold",
                  lineHeight: 16,
                },
                b: {
                  color: "rgb(98,137,169)",
                  fontSize: 14,
                  height: 18,
                },
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgb(98,137,169)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
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

  function pe01() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe01"));
    var txt = 44.9;
    const option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "14",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#eaff00",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
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

  function pe02() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe02"));
    var txt = 21.1;
    const  option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "14",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#ea4d4d",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
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
  function pe03() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pe03"));
    var txt = 15.4;
    const option = {
      title: {
        text: txt + "%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#fff",
          fontSize: "14",
        },
      },
      color: "rgba(255,255,255,.3)",

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["65%", "80%"],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [
            {
              value: txt,
              name: "已使用",
              itemStyle: {
                normal: {
                  color: "#395ee6",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
            },
            {
              name: "未使用",
              value: 100 - txt,
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
});
