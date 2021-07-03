<template>
    <div id="background">
        <div id="title">
            <span>{{title}}</span>
            <br />
            <span class="text-h4">{{subtitle}}</span>
            </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props:{
        title: {type: String},
        subtitle: {type: String}
    }
});

</script>

<style scoped lang="scss">
    @import "@/assets/starfield/starfield-light";
</style>