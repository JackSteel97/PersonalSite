<template>
<div>
    <v-row>
        <v-slide-y-transition group class="row">
        <v-col cols="12" sm="6" md="4" lg="2" class="mt-1" v-for="skill in skillsToDisplay" :key="skill.name">
                <skill :skill="skill" />
        </v-col>
        </v-slide-y-transition>
    </v-row>
    <v-row class="pt-3" justify="center">
        <v-col cols="6" class="text-center">
            <v-btn v-show="showMore || amountToShow != skillItems.length" @click="showMore = !showMore" elevation="3" :outlined="showMore" color="primary">Show {{showMore ? "Less" : "More"}}</v-btn>
        </v-col>
    </v-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Skill from '~/models/skills/Skill';
import skill from './skill.vue';
import vuetify from 'vuetify';

export default Vue.extend({
  components: { skill },
    data: () =>{
        return {
            skillItems: [
                new Skill("C#", "#A37BDD"),
                new Skill("React", "#61DAFB"),
                new Skill("Azure", "#008AD7"),
                new Skill("Vue.js", "#41B883"),
                new Skill("Visual Studio", "#8955C5"),
                new Skill("Problem Solving", "#42daf5"),
                new Skill(".NET", "#5E22E3"),
                new Skill("Unit Testing", "#00580C"),
                new Skill("HTML", "#E54C21"),
                new Skill("CSS", "#254BDD"),
                new Skill("Typescript", "#3178C6"),
                new Skill("EF Core", "#40CCF4"),
                new Skill("SQL Server", "#006EC0"),
                new Skill("Git", "#F26248"),
                new Skill("SVN", "#819DCA"),
            ],
            showMore: false
        }
    },
    computed:{
        amountToShow(): number {
            if(this.showMore){
                return this.skillItems.length;
            }
            if(this.$vuetify.breakpoint.xl){
                return Math.floor(this.skillItems.length / 12) * 12;
            }else if(this.$vuetify.breakpoint.lg){
                 return Math.floor(this.skillItems.length / 6) * 6;
            }else if (this.$vuetify.breakpoint.md){
                 return Math.floor(this.skillItems.length / 4) * 4;
            }
            return 4;
        },
        skillsToDisplay(): Array<Skill> {
            return this.skillItems.slice(0, this.amountToShow);
        }
    }
})
</script>