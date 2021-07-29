<template>
    <div id="background">
        <div id="title">
            <span>{{title}}</span>
            <br />
           <span class="text-h4">
                <vue-typed-js class="d-block" :strings="subtitle" :smartBackspace="true" :showCursor="false">
                    <span class="typing"></span>
                </vue-typed-js>
            </span>
        </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs);

export default Vue.extend({
    props:{
        title: {type: String},
        subtitle: {type: Array}
    }
});

</script>

<style scoped lang="scss">
    @import "@/assets/starfield/starfield-light";
</style>