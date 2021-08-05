<template>
<div>
    <div class="browserupgrade">
        <p>You are using an outdated browser. Please <a href="http://browsehappy.com/">
        upgrade your browser</a> to improve your experience.</p>
    </div>
    <v-app dark>
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant="!isMobile && miniVariant"
                :clipped="clipped"
                fixed
                app>
                <v-list>
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        :to="{path: item.to, hash: item.hash}"
                        router
                        ripple
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
                <v-btn icon @click.stop="toggleLeftDrawer" aria-label="menu button">
                    <v-icon>{{icons.menu}}</v-icon>
                </v-btn>

                <v-toolbar-title v-text="title" />

                <v-spacer />

                <v-btn icon @click.stop="rightDrawer = !rightDrawer" aria-label="settings button">
                    <v-icon>{{icons.cog}}</v-icon>
                </v-btn>
            </v-app-bar>

            <v-main>
                <v-container fluid class="px-0 pt-0">
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
                            <v-icon @click="rightDrawer = false" class="float-right">{{icons.close}}</v-icon>
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
                <span>&copy; Jack Steel - {{ new Date().getFullYear() }}</span>
                <v-spacer />
                <span ><v-icon left>{{icons.email}}</v-icon><a :class="isDarkMode ? 'definitely-white' : 'definitely-not-white'" href="mailto:website@jacksteel.co.uk">Get in touch</a></span>
            </v-footer>
    </v-app>
</div>
   
</template>

<script>
import ThemeSelector from '~/components/common/ThemeSelector.vue';
import {Theme} from '~/models/common/DisplayTheme';
import {mdiEmail, mdiHome, mdiStarOutline, mdiCalendarRangeOutline, mdiBookOpenBlankVariant, mdiOpenInNew, mdiClose, mdiCog, mdiMenu} from '@mdi/js';

export default {
  components: { ThemeSelector },
    data() {
        return {
            icons:{
                email: mdiEmail,
                close: mdiClose,
                cog: mdiCog,
                menu: mdiMenu,
            },
            clipped: true,
            drawer: false,
            fixed: true,
            miniVariant: true,
            items: [
                {
                    icon: mdiHome,
                    title: 'Home',
                    to: '/',
                    hash: null
                },
                {
                    icon: mdiStarOutline,
                    title: 'Skills',
                    to: '/',
                    hash: '#skills'
                },
                {
                    icon: mdiCalendarRangeOutline,
                    title: 'Experience',
                    to: '/',
                    hash: '#experience'
                },
                {
                    icon: mdiBookOpenBlankVariant,
                    title: 'Public Projects',
                    to: '/',
                    hash: '#projects'
                },
                {
                    icon: mdiOpenInNew,
                    title: 'Elsewhere on the Web',
                    to: '/',
                    hash: '#elsewhere'
                }
            ],
            right: true,
            rightDrawer: false,
            title: 'Jack Steel',
            selectedTheme: Theme.System
        };
    },

    beforeMount() {
        this.initialiseTheme();
    },

    methods: {
        toggleLeftDrawer(){
            if(this.isMobile){
                this.drawer = !this.drawer;
            }else{
                this.drawer = true;
                this.miniVariant = !this.miniVariant;
            }
        },

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
          let theme = localStorage.getItem("selected-theme");
          if(theme != null){
              theme = Number(theme);
          }
          return theme;
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
              this.stopListeneningForSystemThemeChanges();
              break;
            case Theme.Light:
              this.setDarkMode(false);
              this.stopListeneningForSystemThemeChanges();
              break;
          }
          this.saveSelectedTheme();
        },

        handleSelectedThemeChange(newTheme){
          this.selectedTheme = newTheme;
          this.setTheme();
        }
    },

    computed:{
        isMobile(){
            return this.$vuetify.breakpoint.mobile;
        },
        isDarkMode(){
            return this.$vuetify.theme.dark;
        }
    },

    watch:{
        isMobile(newVal, oldVal){
            if(newVal && newVal != oldVal){
                this.miniVariant = true;
                this.drawer = false;
            }else if(!newVal && newVal != oldVal){
                this.miniVariant = true;
                this.drawer = true;
            }
        }
    }
};
</script>