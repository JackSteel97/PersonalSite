<template>
<div>
  <div>
    <starfield-light class="elevation-2" title="JACK STEEL" subtitle="Software Engineer" v-show="!$vuetify.theme.dark" />
    <starfield-dark class="elevation-2" title="JACK STEEL" subtitle="Software Engineer" v-show="$vuetify.theme.dark" />
  </div>

  <v-container>
    <h2 class="text-h2 pb-4 mb-4">Skills</h2>
    <skills />
  </v-container>

  <v-container>
    <h2 class="text-h2">Experience</h2>
    <experience />
  </v-container>

  <v-container>
    <h2 class="text-h2 mb-4">Public Projects</h2>
    <v-row>
      <v-col cols="12" offset-xl="1" xl="10">
        <v-carousel class="elevation-2" height="100%" cycle hide-delimiters>
          <project-card title="Sinara TLC"
            imageSrc="/imgs/projects/sinaraTlc.png"
            lazySrc="/imgs/projects/sinaraTlc-lazy.png"
            link="https://www.sinara.com/solutions/trading-operational-systems/trade-lifecycle/" 
            duration="July 2020 - Present"
            description="End-to-End integrated Software Framework for the Derivatives Trading Lifecycle"
          />

          <project-card title="Navigate-Me"
            imageSrc="/imgs/projects/navigateme.png"
            lazySrc="/imgs/projects/navigateme-lazy.png"
            link="https://navigateme.lincoln.ac.uk" 
            duration="January 2017 - June 2020"
            description="University of Lincoln Campus Navigation System"
          />

          <project-card title="Find-A-PC"
            imageSrc="/imgs/projects/findapc.png"
            lazySrc="/imgs/projects/findapc-lazy.png"
            link="https://findapc.lincoln.ac.uk" 
            duration="January 2018 - June 2020"
            description="University of Lincoln PC Availability Checker"
          />

          <project-card title="Linking You (Lncn)"
            imageSrc="/imgs/projects/linkingyou.png"
            lazySrc="/imgs/projects/linkingyou-lazy.png"
            link="https://lncn.ac" 
            duration="September 2018 - June 2020"
            description="University of Lincoln PC Link Shortening Service"
          />
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import Vue from 'vue';
import Experience from '~/components/experience/experience.vue';
import ProjectCard from '~/components/projects/project-card.vue';
import Skills from '~/components/skills/skills.vue';

export default Vue.extend({
  components: { Experience, Skills, ProjectCard},
  computed:{
    ProjectCardisDarkMode(){
      return this.$vuetify.theme.dark;
    }
  }
});
</script>

<style lang="scss" scoped>

</style>