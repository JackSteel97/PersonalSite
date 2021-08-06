<template>
    <v-carousel-item>
        <v-card>
            <v-img :src="imageSrc" :lazy-src="lazySrc" max-height="720" >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center">
                        <v-progress-circular
                            indeterminate
                            aria-label="loading image"
                            color="grey lighten-5" />
                    </v-row>
                </template>
            </v-img>
            <v-card-title class="pb-2">{{title}}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0">
                    <div class="text-subtitle-1">{{duration}}</div>
                </v-row>
                <v-row align="center" class="mx-0">
                    <p class="mb-0">{{description}}</p>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn width="100%" :href="link" target="_blank" rel="noreferrer">{{linkText}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:{
        title: {type: String},
        imageSrc: {type: String},
        lazySrc: {type: String},
        link: {type: String},
        duration: {type: String},
        description: {type: String},
        linkText: {type: String, default: 'Learn More'},
    }
})
</script>