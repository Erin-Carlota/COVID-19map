import axios from 'axios';
import {base,ncov,ncovcity} from './base';
import {key} from './mykey' 

// 抗击疫情数据接口
export function getCovid(){
    
    // 使用get请求
    return axios.get(base+ncov,{
        params:{
            key
        }
    })
}

// 地图数据
export function postCovidCity(){
    return axios.post(base+ncovcity,'key='+key)
}

// 模拟轮播数据
export function getBanner(){
    return axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    .then(({data})=>{
        let banner = JSON.parse(JSON.stringify(data.banner).replace(/www.wwtliu.com\/sxtstu/g,'iwenwiki.com/api'));
        return banner
    })
}