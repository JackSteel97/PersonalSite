<template>
    <v-card class="elevation-2" :color="item.color">
        <v-card-title class="text-h6 pt-2" :style="titleColorStyle">
            <span class="break-word">{{item.title}} - <a class="font-weight-light title-link" :href="item.companyLink" target="_blank" :style="titleColorStyle">{{item.company}}</a></span>
        </v-card-title>

        <v-card-subtitle class="mb-0 pb-1" :style="subtitleColorStyle">
            <span>{{startDisplay}} - {{endDisplay}}</span>
            <span>&nbsp;&mdash;&nbsp;</span>
            <span>{{duration}}</span>

            <p class="mb-0">{{item.description}}</p>
        </v-card-subtitle>

       
            <v-card-text class="experience-text" :class="cardTextClass">
                <v-slide-x-transition>
                    <template v-if="readMore">
                        <p class="text-subtitle-2 mb-0">Achievements and Responsibilities</p>
                    </template>
                </v-slide-x-transition>
                <v-slide-x-transition>
                    <template v-if="readMore">
                        <ul>
                            <li v-for="(responsibility, i) in item.responsibilities" :key="i">{{responsibility}}</li>
                        </ul>
                    </template>
                </v-slide-x-transition>
            </v-card-text>

        <v-card-actions class="pt-0">
            <v-btn text @click="readMore = !readMore" :style="subtitleColorStyle">
                {{readMore ? 'Show Less' : 'Show More'}}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import * as moment from 'moment';
import ExperienceItem from '~/models/experience/ExperienceItem';

export default Vue.extend({
    props:{
        item: {type: Object as PropType<ExperienceItem>}
    },
    data: () => {
        return {
            readMore: false
        }
    },

    methods:{
        setOpacity(hex: string, alpha: number):string {
            return `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        }
    },

    computed: {
        cardTextClass(){
            if(!this.readMore){
                return "no-height pa-0";
            }
            return this.$vuetify.theme.dark ? 'dark-card-text' : 'light-card-text';
        },
        duration(): string {
            let momentDuration = moment.duration(this.endMoment.diff(this.startMoment));
            let years = momentDuration.years();
            let months = momentDuration.months();
            let result = "";
            if(years > 0){
                result += `${years} Year${years>1 ? 's' : ''}`;
            }
            if(months > 0){
                if(result.length>0){
                    result += " ";
                }
                if(!this.item.toPresent){
                    months +=1;
                }
                result += `${months} month${months>1 ? 's' : ''}`;
            }
            return result;
        },
        startMoment(): moment.Moment {
            return moment.utc(this.item.startDate);
        },
        endMoment(): moment.Moment {
            return moment.utc(this.item.endDate);
        },
        startDisplay():string {
            return this.startMoment.format('MMM YYYY');
        },
        endDisplay(): string{
            if(this.item.toPresent){
                return "Present";
            }
            return this.endMoment.format('MMM YYYY');
        },
        titleColorStyle():string{
            return `color: ${this.item.titleColor};`;
        },
        subtitleColorStyle():string {
            return `color: ${this.setOpacity(this.item.titleColor, 0.87)}`;
        }

    }
});
</script>

<style scoped lang="scss">
.dark-card-text{
    color: #FFFFFF;
    background-color: #1E1E1E;
    max-height: 500px;
}

.light-card-text{
    color: rgba(0, 0, 0, 0.95) !important;
    background-color: #FFFFFF;
    max-height: 500px;
}

.title-link{
    text-decoration: underline;

    &:hover{
        font-weight: bold !important;
    }
}

.no-height{
    max-height: 0;
}

.experience-text{
    transition-property: all;
    transition-duration: 0.4s;
}

.break-word{
    word-break: break-word;
}
</style>