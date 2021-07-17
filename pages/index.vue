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
</div>
</template>

<script>
import Vue from 'vue';
import experience from '~/components/experience/experience.vue';
import Skills from '~/components/skills/skills.vue';

export default Vue.extend({
  components: { experience, Skills },
  computed:{
    isDarkMode(){
      return this.$vuetify.theme.dark;
    }
  }
});
</script>