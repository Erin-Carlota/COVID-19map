## 1. 网络请求
    基础路径：http://api.tianapi.com
    抗击疫情数据接口: /txapi/ncov/index
    地图数据接口：/txapi/ncovcity/index
    key : 37628affa346aae8bd97ad80fd31ae04

## 2. echarts图表
    - 安装echarts : npm i echarts
    - 地图
        1. 引入echarts 和 china 地图
        2. 组件渲染完成时加载地图
        3. 数据加载到地图中
        4. 鼠标放到对应的省份上时，能显示 当前省的 现存确诊 人数
        
    2. 折线图

## 3. 轮播图
    swiper
    1. 下载轮播图 
        npm install swiper vue-awesome-swiper --save
    2. 注册到全局
        `import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/swiper-bundle.css'`
       Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
    3. 使用
        监听滑块动画完成的事件：slideChangeTransitionEnd
        让轮播图滑动指定滑块：slideTo
        获取当前滑块的下标：activeIndex
## 4. 新闻展示
## 5. rem布局


