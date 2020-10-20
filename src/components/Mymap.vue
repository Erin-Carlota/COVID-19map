<template>
  <div>
    <div id="main" style="width:7.5rem;height:5.6rem "></div>
    <!-- <div id="main2" style="width:7.5rem;height:5.6rem "></div> -->
  </div>
</template>

<script>
import echarts from "echarts";
import "../../node_modules/echarts/map/js/china";
import "../../node_modules/echarts/map/js/world";
import { postCovidCity } from "../api/index";
export default {
  methods: {
    getlistdata(arr) {
      let newarr = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.name = arr[i].provinceShortName;
        obj.value = arr[i].currentConfirmedCount;
        newarr.push(obj);
      }
      return newarr;
    },
  },
  mounted() {
    // 创建地图
    var myChart = echarts.init(document.getElementById("main"));
    postCovidCity().then((data) => {
      let newarr = this.getlistdata(data.data.newslist);

      var option = {
        title: {
          text: "疫情各省份统计",
        },
        visualMap:[{
            type:'piecewise',
            pieces:[
                {min:500},
                {min:300,max:500},
                {min:100,max:300},
                {min:50,max:100},
                {min:30,max:50},
                {min:10,max:30},
                {min:1,max:10}
            ]
        }],
        tooltip: {
            show : true,
            triggerOn:'mousemove',
            formatter:(params)=>(`<div>
                <p>省：${params.name}</p>
                <p>现存确诊：${params.value}</p>
            </div>`)
        },
        legend: {
          data: ["疫情"],
        },
        series: [
          {
            type: "map",
            showLegendSymbol:false,
            label: {
              show: true,
            },
            itemStyle: {
              areaColor: "#ffffff",
               borderColor:'#ccc'
            },
            emphasis:{
                itemStyle:{
                    areaColor:'orange'
                }
            },
            map: "china",
            data: newarr
          },
        ],
      };
      myChart.setOption(option);
    });

    // var myChart2 = echarts.init(document.getElementById("main2"));
    // var option2 = {
    //   title: {
    //     text: "全球疫情统计",
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ["疫情"],
    //   },
    //   series: [
    //     {
    //       type: "map",
    //       map: "world",
    //     },
    //   ],
    // };

    // myChart2.setOption(option2);
  },
};
</script>

<style lang="scss" scoped>
</style>