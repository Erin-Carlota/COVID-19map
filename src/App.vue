<template>
  <div id="app">
    <div class="head-pic">
      <img src="./assets/1.jpg" alt="">
    </div>
    <!-- 病毒信息 -->
    <Covid :covidInfo='covidInfo' />
    <!-- 统计数据 -->
    <Count :countdata='countdata' />
    <!-- 地图 -->
    <Mymap />
    <!-- 轮播图 -->
    <Myswiper />
    <!-- 新闻展示 -->
    <News :news='news' />
    <!-- 尾部 -->
    <div>
      <img src="./assets/2.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Covid from './components/Covid';
import Count from './components/Count'
import Mymap from './components/Mymap';
import Myswiper from './components/Myswiper'
import News from './components/News'
import {getCovid} from './api/index'
export default {
  name: 'App',
  data(){
    return {
      covidInfo:{},
      news:[],
      countdata:{}
    }
  },
  mounted(){
    getCovid()
    .then(data=>{
      console.log(data)
      let {desc,news} = data.data.newslist[0];
      // 存储病毒信息
      this.covidInfo = {
        note1:desc.note1,
        note2:desc.note2,
        note3:desc.note3,
        remark1:desc.remark1,
        remark2:desc.remark2,
        remark3:desc.remark3
      };
      // 存储新闻
      this.news = news;
      // 统计数据
      this.countdata = {
        currentConfirmedCount:desc.currentConfirmedCount, // 现存确诊人数
        confirmedCount:desc.confirmedCount , //累计确诊人数
        curedCount:desc.curedCount , //累计治愈人数
        deadCount:desc.deadCount , //累计死亡
        seriousCount:desc.seriousCount, //重症
        suspectedCount:desc.suspectedCount, //现存疑似
        modifyTime:desc.modifyTime //更新时间
      }
    })
  },
  components:{
    Covid,
    Count,
    Mymap,
    Myswiper,
    News
  }
}
</script>

<style>
.head-pic{
  width:100%;
}
.head-pic img{
  width:100%;
}
</style>
