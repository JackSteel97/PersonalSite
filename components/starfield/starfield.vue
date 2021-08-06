<template>
    <div id="background" :class="theme">
        <div id="title" :class="theme">
            <span>{{title}}</span>
            <br/>
            <span class="text-h4">
                <vue-typed-js class="d-block" :strings="subtitle" :smartBackspace="true" :showCursor="false">
                    <span class="typing"></span>
                </vue-typed-js>
            </span>
        </div>
        <div id="stars" :class="theme"></div>
        <div id="stars2" :class="theme"></div>
        <div id="stars3" :class="theme"></div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs);

export default Vue.extend({
    props:{
        title: {type: String},
        subtitle: {type: Array},
        dark: {type: Boolean}
    },
    computed:{
        theme(){
            if(this.dark){
                return 'theme-dark';
            } else {
                return 'theme-light';
            }
        }
    }
});
</script>

<style scoped lang="scss">
    @import "@/assets/starfield/starfield";
</style>