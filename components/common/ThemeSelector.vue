<template>
    <v-item-group active-class="primary">
        <v-container>
            <v-row>
                <v-col v-for="theme in themes"
                        :key="theme.theme"
                        cols="12"
                        md="6"
                        class="px-1 py-1">
                    <v-item v-slot="{active, toggle}" class="py-3 px-2 text-center">
                        <v-card :color="theme.active ? 'primary' : ''"
                            class="d-flex align-center"
                            height="50"
                            tile
                            @click="toggleTheme(theme, active, toggle)">
                                <span>{{theme.name}}</span>
                                <v-spacer />
                                <v-icon>{{theme.icon}}</v-icon>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script lang="ts">
import Vue from 'vue'
import {DisplayTheme, Theme} from '~/models/common/DisplayTheme'
import {mdiDesktopTowerMonitor, mdiWeatherNight, mdiWhiteBalanceSunny} from '@mdi/js';

export default Vue.extend({
    data: () => {
        return {
            themes: [
                new DisplayTheme(Theme.System, mdiDesktopTowerMonitor, true),
                new DisplayTheme(Theme.Dark, mdiWeatherNight),
                new DisplayTheme(Theme.Light, mdiWhiteBalanceSunny)
            ]
        }
    },
    methods:{
        toggleTheme(theme: DisplayTheme, active: boolean, toggleCallback: any){
            this.themes.forEach(theme=>theme.active = false);
            theme.active = active;
            toggleCallback();
            this.$emit('theme-changed', theme.theme);
        },
        getSelectedThemeFromStorage(): number{
          let theme = localStorage.getItem("selected-theme");
          let result = Theme.System;
          if(theme != null){
              result = Number(theme);
          }
          return result;
        },
        initialiseSelectedTheme(){
            let selectedTheme = this.getSelectedThemeFromStorage();
            this.themes.forEach(theme=>theme.active = theme.theme == selectedTheme);
        }
    },
    beforeMount(){
        this.initialiseSelectedTheme();
    }
})
</script>