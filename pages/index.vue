<template>
  <div>
    <starfield-light class="elevation-2" title="JACK STEEL" subtitle="Software Engineer" v-show="!$vuetify.theme.dark" />
    <starfield-dark class="elevation-2" title="JACK STEEL" subtitle="Software Engineer" v-show="$vuetify.theme.dark" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  computed:{
    isDarkMode(){
      return this.$vuetify.theme.dark;
    }
  }
});
</script>