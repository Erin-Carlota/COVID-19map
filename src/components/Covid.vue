<template>
  <div class="covid-box">
    <div class="covid-name">
      <p class="line"></p>
      <h2>病毒信息</h2>
    </div>
    <div class="info-box">
      <p>{{covidInfo.remark1}}</p>
      <p>{{covidInfo.remark2}}</p>
      <p>{{covidInfo.remark3}}</p>
      <p>{{covidInfo.note1}}</p>
      <p>{{covidInfo.note2}}</p>
      <p>{{covidInfo.note3}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["covidInfo"],
  watch: {
    covidInfo(n) {
      console.log(n);
    },
  },
};
</script>

<style scoped>
.covid-box{
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
}
.covid-name {
  overflow: hidden;
}
.line {
  float: left;
  width: 4px;
  height: 16px;
  background: #4169e2;
  margin-right: 5px;
}
.covid-name h2 {
  font-weight: bold;
  float: left;
}
.info-box p{
    color:#aaa;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin:12px;
}
</style>