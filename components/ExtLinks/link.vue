<template>
    <v-card class="ext-link pt-2" tile elevation="2" :href="destination" target="_blank">
        <v-icon v-if="!image" :aria-label="title" :color="iconColor" class="ext-link-icon">{{icon}}</v-icon>
        <v-img v-if="image" :aria-label="title" height="48" contain :src="imageSrc" />
        <v-card-subtitle class="ext-link-username pt-1">{{username}}</v-card-subtitle>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props:{
        title: {type: String},
        destination: {type: String},
        username: {type: String},
        image: {type: Boolean, default: false},
        imageSrc: {type: String},
        icon: {type: String},
        iconColor: {type: String}
    }    
})
</script>

<style lang="scss" scoped>
    .ext-link-icon{
        font-size: 48px !important;
    }
    .ext-link-username{
        text-decoration: underline;
    }
</style>