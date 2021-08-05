<template>
<v-sheet elevation="2">
    <v-row align="center" class="pl-1">
        <v-col cols="5" class="text-center">
            {{skill.name}}
        </v-col>
        <v-divider class="my-2" vertical inset />
        <v-col>
            <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                    <div v-bind="attrs"
                         v-on="on"
                         class="d-inline-block">
                            <v-rating
                                :color="skill.color"
                                length="5"
                                readonly
                                :value="skill.rating"
                                :empty-icon="starOutline"
                                :full-icon="star"
                                :half-icon="starHalfFull"
                                background-color="grey darken-1">
                            </v-rating>
                    </div>
                    
                </template>
                <span>{{tooltipText}}</span>
            </v-tooltip>
           
        </v-col>
    </v-row>
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
    computed: {
        tooltipText(){
            switch(this.skill.rating){
                case 5:
                    return 'Expert';
                case 4:
                    return 'Advanced';
                case 3:
                    return 'Intermediate';
                default:
                    return 'Beginner';
            }
        }
    }
});
</script>