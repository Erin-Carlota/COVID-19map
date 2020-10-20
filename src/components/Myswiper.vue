<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in banner" :key="item.title">
        <div class="item">
          <h1>{{item.title}}</h1>
          <img :src="item.img" alt />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="type">
      <span @click="changeIndex(0)" :class="{active:curindex == 0}">新增疑似/新增确诊</span>
      <span @click="changeIndex(1)" :class="{active:curindex == 1}">现存确诊/现存疑似</span>
      <span @click="changeIndex(2)" :class="{active:curindex == 2}">死亡/治愈</span>
      <span @click="changeIndex(3)" :class="{active:curindex == 3}">病死率</span>
      <span @click="changeIndex(4)" :class="{active:curindex == 4}">治愈率</span>
    </div>
  </div>
</template>
 
<script>
import { getBanner } from "../api/index";
export default {
  data() {
    let that = this;
    return {
      curindex: 0,
      banner: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        // Some Swiper option/callback...
        on: {
          slideChangeTransitionEnd: function() {
            that.curindex = this.activeIndex;
          }
        }
      }
    };
  },
  mounted() {
    getBanner().then(data => {
      this.banner = data;
    });
    // 监听swiper动画完成的回调事件，在回调事件中修改当前活动下标
  },
  methods: {
    changeIndex(index) {
      this.curindex = index;
      this.swiper.slideTo(index, 600);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>

<style scoped>
.item {
  width: 100%;
}
.item img {
  width: 100%;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
}
</style>