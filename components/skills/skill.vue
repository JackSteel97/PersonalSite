<template>
<v-sheet elevation="2" class="py-2 px-2" height="100%">
    <p class="text-subtitle-1 text-center my-0">
        {{skill.name}}
    </p>
    <v-sheet :color="skill.color" rounded elevation="0" height="3"></v-sheet>
</v-sheet>
</template>


<script lang="ts">
import Vue, {PropType} from 'vue';
import Skill from '~/models/skills/Skill';
import {mdiStar, mdiStarOutline, mdiStarHalfFull} from '@mdi/js'; 

export default Vue.extend({
    props:{
        skill: {type: Object as PropType<Skill>}
    },
    data: () => ({
        star: mdiStar,
        starOutline: mdiStarOutline,
        starHalfFull: mdiStarHalfFull
    }),
});
</script>