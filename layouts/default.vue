<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app>
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon>mdi-{{`chevron-${miniVariant ? 'right' : 'left'}`}}</v-icon>
            </v-btn>

            <v-toolbar-title v-text="title" />

            <v-spacer />

            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>

        <v-navigation-drawer
            v-model="rightDrawer"
            :right="right"
            temporary
            fixed>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        <span>Settings</span>
                        <v-icon @click="rightDrawer = false" class="float-right">mdi-close</v-icon>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-overline pl-1">
                        Theme
                    </v-list-item-title>
                    <theme-selector @theme-changed="handleSelectedThemeChange" />
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>

        <v-footer :absolute="!fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import ThemeSelector from '~/components/common/ThemeSelector.vue';
import {Theme} from '~/models/common/DisplayTheme';

export default {
  components: { ThemeSelector },
    data() {
        return {
            clipped: true,
            drawer: true,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-chart-bubble',
                    title: 'Inspire',
                    to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Jack Steel',
            selectedTheme: Theme.System
        };
    },

    beforeMount() {
        this.detectDarkModeAtStartup();
        this.listenForSystemThemeChanges();
    },

    methods: {
        setDarkMode(on) {
            this.$vuetify.theme.dark = on;
        },

        listenForSystemThemeChanges() {
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleSystemThemeChange);
        },
        stopListeneningForSystemThemeChanges(){
          window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.handleSystemThemeChange);
        },
        handleSystemThemeChange(e){
          if (e.matches) {
              // Dark mode.
              this.setDarkMode(true);
          } else {
              // Light mode.
              this.setDarkMode(false);
          }
        },

        setThemeModeFromSystem() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.setDarkMode(true);
            } else {
                this.setDarkMode(false);
            }
        },

        saveSelectedTheme(){
          localStorage.setItem("selected-theme", this.selectedTheme.toString())
        },
        getSelectedThemeFromStorage(){
          return localStorage.getItem("selected-theme");
        },

        initialiseTheme(){
          let storedTheme = this.getSelectedThemeFromStorage();
          if(storedTheme != null){
            this.selectedTheme = storedTheme;
          }
          this.setTheme();
        },
        setTheme(){
          switch(this.selectedTheme){
            case Theme.System:
              this.setThemeModeFromSystem();
              this.listenForSystemThemeChanges();
              break;
            case Theme.Dark:
              this.setDarkMode(true);
              break;
            case Theme.Light:
              this.setDarkMode(false);
              break;
          }
        },

        handleSelectedThemeChange(newTheme){
          this.selectedTheme = newTheme;
          this.setTheme();
        }
    }
};
</script>
