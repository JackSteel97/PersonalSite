<template>
<v-sheet elevation="2">
    <v-row align="center" class="pl-1">
        <v-col cols="5" class="text-center">
            {{skill.name}}
        </v-col>
        <v-divider class="my-2" vertical inset />
        <v-col>
            <v-rating
                :color="skill.color"
                length="5"
                readonly
                :value="skill.rating"
                background-color="grey darken-1">
            </v-rating>
        </v-col>
    </v-row>
</v-sheet>
</template>


<script lang="ts">
import Vue, {PropType} from 'vue';
import Skill from '~/models/skills/Skill';

export default Vue.extend({
    props:{
        skill: {type: Object as PropType<Skill>}
    }
});
</script>