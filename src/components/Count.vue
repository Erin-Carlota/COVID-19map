<template>
    <div class="count-box">
        <div class="count-head">
            <h1>截止 {{countdata.modifyTime | formatTime}} 全国数据统计</h1>
        </div>
        <div class="count-content">
            <div class="count">
                <p class="currentConfirmedCount">{{countdata.currentConfirmedCount}}</p>
                <p>现存确诊</p>
            </div>
            <div class="count">
                <p class="suspectedCount">{{countdata.suspectedCount}}</p>
                <p>现存疑似</p>
            </div>
            <div class="count">
                <p class="seriousCount">{{countdata.seriousCount}}</p>
                <p>现存重症</p>
            </div>
            <div class="count">
                <p class="confirmedCount">{{countdata.confirmedCount}}</p>
                <p>累积确诊</p>
            </div>
            <div class="count">
                <p class="deadCount">{{countdata.deadCount}}</p>
                <p>累计死亡</p>
            </div>
            <div class="count">
                <p class="curedCount">{{countdata.curedCount}}</p>
                <p>累计治愈</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        countdata:{
            type:Object
        }
    },
    filters:{
        formatTime(value){
            // 2020-9-4 9:53:47 
            let time = new Date(value).toTimeString().slice(0,9)
            let date = new Date(value).toLocaleDateString().replace(/\//g,'-')
            return date +' ' + time;
        }
    }
}
</script>

<style scoped>
.currentConfirmedCount{
    color: rgb(247, 76, 49);
}
.suspectedCount{
    color: rgb(247, 130, 7)
}
.seriousCount{
    color: rgb(162, 90, 78);
}
.count-box{
    padding:20px;
}
.count-content{
    width:100%;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0px 0px 1px #bbb;
    padding-top:20px;
    font-weight: bold;
}
.count-content .count{
    width:33.33%;
    float: left;
    margin-bottom:20px;
    text-align:center;
}
.count-content .count p{
    margin:5px 0;
}
.curedCount{
    color:rgb(40, 183, 163);
}
.deadCount{
    color: rgb(93, 112, 146)
}
.confirmedCount{
    color: rgb(174, 33, 44);
}
</style>