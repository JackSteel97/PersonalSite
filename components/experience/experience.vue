<template>
    <v-timeline reverse :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, index) in experienceItems" :key="index" :color="item.color">
            <template v-slot:opposite>
                <span class="headline font-weight-light">{{item.oppositeText}}</span>
            </template>
            
            <experience-item :item="item" />

        </v-timeline-item>
    </v-timeline>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceItem from '~/models/experience/ExperienceItem';
import experienceItem from './experience-item.vue';

export default Vue.extend({
  components: { experienceItem },
    data: () =>{
        return {
            experienceItems: [
                new ExperienceItem('#002F6C', "Fullstack Software Engineer", "#FFFFFF", "Insurwave", "https://insurwave.com/",
                                "Full-time", new Date(2022, 5, 6), true, new Date(), ["Remote Role", "Agile Scrum Development of modern Microservice-based SaaS systems", "Programming with C#, Typescript, React", "CI/CD with Azure DevOps and deployment with Kubernetes"]),

                new ExperienceItem('#c70d0e', "Software Engineer", "#FFFFFF", "Sinara Consultants", "https://www.sinara.com/",
                                "Full-time", new Date(2020, 6, 6), false, new Date(2022, 5, 6), ["Effective home working during pandemic", "Effective hybrid working", "Agile Scrum development of internal and external client large-scale systems", "Programming with C#, SignalR, Typescript, VueJS", "Deployment to AWS with kubernetes", "CI/CD with Jenkins"]),

                new ExperienceItem('#072249', "Information Services Developer", "#FFFFFF", "University of Lincoln", "https://www.lincoln.ac.uk/",
                                "Year in Industry Placement - Continued part-time through final year studies", new Date(2018, 2, 6), false, new Date(2020, 5, 28), ['Winner in Best Achievement in Student Experience Enhancement for Navigate-Me', 'Highly Commended in Best Achievement in Technology for Navigate-Me', 'Agile development of new and existing public-facing web systems', 'Programming with C#, MVC ASP.NET, VueJS with JSX, and SQL Server','Lead small development team', 'Resolving customer support tickets', 'Maintenance of developed systems, including fixes and feature additions']),

                new ExperienceItem('#072249', "Associate Developer", "#FFFFFF", "University of Lincoln", "https://www.lincoln.ac.uk/",
                                "Part-time during first year of studies (full-time over summer)", new Date(2017, 0, 6), false, new Date(2018, 2, 28), ['Agile development of new public-facing web systems', 'Regular reporting at team meetings', 'Programming in C#, MVC ASP.NET, JavaScript and SQL Server']),

                new ExperienceItem('#cccccc', "Freelance Software Developer", "#000000", "Just Sew Interiors", "https://www.justsewinteriors.com/",
                                "Ad-hoc", new Date(2016, 3, 6), false, new Date(2016, 9, 28), ['Gathering customer requirements', 'System enhancements to bespoke sample loan system and shop stock control system', 'Implementing new features on request quickly and efficiently using VB.NET and SQL Server']),

                new ExperienceItem('#ffcd11', ".NET Developer", "#000000", "Caterpillar Inc", "https://www.caterpillar.com/",
                                "Summer Internship", new Date(2015, 6, 6), false, new Date(2015, 8, 28), ['Design and Development of internal desktop systems for productivity and auditing', 'Reporting at team meetings']),
            ]
        }
    },
});
</script>