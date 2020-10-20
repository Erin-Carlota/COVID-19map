<template>
    <div>
        <ul>
            <li v-for="item in news" :key='item.title'>
                <div>
                    <p>{{item.pubDateStr}}</p>
                </div>
                <div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.summary}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['news']
    }
</script>

<style lang="scss" scoped>

</style>