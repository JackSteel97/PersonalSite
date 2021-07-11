<template>
    <v-row class="pa-4">
        <v-col cols="3" class="mt-1" v-for="skill in skillItems" :key="skill.name">
            <skill :skill="skill" />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Skill from '~/models/skills/Skill';
import skill from './skill.vue';

export default Vue.extend({
  components: { skill },
    data: () =>{
        return {
            skillItems: [
                new Skill("Vue.js", "#41B883", 5),
                new Skill("Visual Studio", "#8955C5", 5),
                new Skill("C#", "#A37BDD", 4),
                new Skill(".NET", "#5E22E3", 4),
                new Skill("HTML", "#E54C21", 4),
                new Skill("Typescript", "#3178C6", 4),
                new Skill("SQL Server", "#006EC0", 3),
                new Skill("EF Core", "#40CCF4", 3),
                new Skill("Git", "#F26248", 3),
                new Skill("SVN", "#819DCA", 3),
                new Skill("Azure", "#008AD7", 2),
                new Skill("AWS", "#FF9900", 1),
            ]
        }
    }
})
</script>