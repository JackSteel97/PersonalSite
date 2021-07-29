<template>
<div>
  <div>
    <starfield-light class="elevation-2" title="JACK STEEL" :subtitle="subtitles" v-show="!$vuetify.theme.dark" />
    <starfield-dark class="elevation-2" title="JACK STEEL" :subtitle="subtitles" v-show="$vuetify.theme.dark" />
  </div>

  <v-container>
    <h2 id="skills" class="text-h2 pb-4 mb-4">Skills</h2>
    <skills />
  </v-container>

  <v-container>
    <h2 id="experience" class="text-h2">Experience</h2>
    <experience />
  </v-container>

  <v-container>
    <h2 id="elsewhere" class="text-h2">Elsewhere on the Web</h2>
    <v-row>
      <v-col  cols="12" sm="12" md="6" lg="4" xl="3">
        <ext-link class="text-center" title="Github" destination="https://github.com/JackSteel97" username="JackSteel97" icon="mdi-github" />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3">
        <ext-link class="text-center" title="LinkedIn" destination="https://www.linkedin.com/in/jacksteel/" username="JackSteel" icon="mdi-linkedin" />
      </v-col>
      <v-col  cols="12" sm="12" md="6" lg="4" xl="3">
        <ext-link class="text-center" title="Instagram" destination="https://www.instagram.com/jacksteelphotography/" username="@JackSteelPhotography" icon="mdi-instagram" />
      </v-col>
      <v-col  cols="12" sm="12" md="6" lg="4" xl="3">
        <ext-link class="text-center" title="HackerRank" destination="https://www.hackerrank.com/jacksteel" username="@JackSteel" image imageSrc="/imgs/hackerrank_logo.svg" />
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <h2 id="projects" class="text-h2 mb-4">Public Projects</h2>
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
import ExtLink from '~/components/ExtLinks/ext-link.vue';
import ProjectCard from '~/components/projects/project-card.vue';
import Skills from '~/components/skills/skills.vue';

export default Vue.extend({
  components: { Experience, Skills, ProjectCard, ExtLink},

  data(){
    return {
      subtitles: ['Software Engineer', 'C# Developer', 'Problem Solver', 'Full Stack Software Engineer']
    }
  },

  computed:{
    ProjectCardisDarkMode(){
      return this.$vuetify.theme.dark;
    }
  }
});
</script>

<style lang="scss" scoped>

</style>