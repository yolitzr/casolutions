<template>
    <div id="about" class="bg-about">
        <b-container fluid="xl">
            <b-row>
                <b-col class="text-center">
                    <h1 class="font-weight-bold">{{title}}</h1>
                    <div class="line"></div>
                    <p class="mt-3">
                        {{subTitle}}
                    </p>
                </b-col>
            </b-row>

            <b-row class="mt-4">
                <b-col lg="7">
                    <div class="box-about" align="center">
                        <h3 class="d-inline-block mt-2">
                            <span>
                                <font-awesome-icon :icon="['fas', 'desktop']" class="about-icon mr-2" />
                            </span>
                            {{process}}
                        </h3>
                        <p class="mt-3">
                            {{processText}}
                        </p>
                        <h5 class="mt-5">Utilizamos los siguientes lenguajes, CMS, Frameworks, Librerias y herramientas:</h5>  
                        <div class="skills">
                            <ul class="d-flex justify-content-between mt-4">
                                <li><img src="https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=HTML5&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Vue%20JS-4FC08D?style=flat&logo=vue.js&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Wordpress-21759B?style=flat&logo=wordpress&logoColor=white"></li>
                            </ul>

                            <ul class="d-flex justify-content-between">
                                <li><img src="https://img.shields.io/badge/-Php-777BB4?style=flat&logo=php&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Laravel-FF2D20?style=flat&logo=laravel&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Symfony-000000?style=flat&logo=symfony&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-docker-2496ED?style=flat&logo=docker&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-MySql-4479A1?style=flat&logo=mysql&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-npm-CB3837?style=flat&logo=npm&logoColor=white"></li>
                            </ul>

                            <ul class="d-flex justify-content-between">
                                <li><img src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat&logo=webpack&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Github-181717?style=flat&logo=github&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-GitKraken-179287?style=flat&logo=gitkraken&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white"></li>
                                <li><img src="https://img.shields.io/badge/-Sublime%20Text-FF9800?style=flat&logo=sublime-text&logoColor=white"></li>
                            </ul>
                        </div>                          
                    </div>

                    <!-- <div class="box-about" align="center">
                        <h3 class="d-inline-block mt-4">
                            <span>
                                <font-awesome-icon :icon="['fas', 'tasks']" class="about-icon mr-2" />
                            </span>
                            {{goals}}
                        </h3>
                        <p class="mt-3">
                            {{goalsText}}
                        </p>
                    </div> -->
                </b-col>

                <b-col lg="5">
                    <div class="experence">
                        <h3 class="mt-2">Experences</h3>
                        <ul class="mt-4">
                            <li v-for="(skill, item) in skillSet" :key="item">
                                <div :style="{ width: skill.initLevel + '%'}">
                                    <label class="area">{{ skill.area }}</label>
                                    <label class="initLevel">{{ skill.initLevel + '%' }}</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'About',
    data () {
        return {
            title: 'About Us',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            goals: 'Our Goals',
            goalsText: 'Build fast and efficient websites with the best optimization to get an SEO that helps with web positioning.',
            process: 'Our Process',
            processText: 'Write a clean code semantic, organized and valid that eliminates excess code and allows others to easily understand and therefore update content in the future.',
            intervalID: '',
            increment: 1,
            skillSet: [
				{ area: 'Frontend', initLevel: 0, level: 60 },
				{ area: 'Backend', initLevel: 0, level: 60 },
				{ area: 'Process Optimization', initLevel: 0, level: 70 },
				{ area: 'Functional analysis', initLevel: 0, level: 80 },
				{ area: 'Project Owner', initLevel: 0, level: 90 },
                { area: 'SEO', initLevel: 0, level: 60 },
                { area: 'Consulting', initLevel: 0, level: 85 }
			]
        }
    },

    mounted: function() {
        this.intervalID = setInterval(() => {
            this.getLevelProgress(this.increment)
        }, 10)
    },

    methods: {
        getLevelProgress: function(value) {
            this.skillSet.forEach(data => {
                data.initLevel = Math.min(Math.floor(data.initLevel+value), data.level)
            })
        }
    },

    beforeDestroy: function() {
        clearInterval(this.intervalID)
    }

}
</script>

<style scoped>
/* .bg-about {
    background-image: url(../assets/Bg.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
} */

#about {
    padding: 4rem 0;
}

* {
	box-sizing: border-box;
}

.experence li {
    margin: 1.5em 0 .5em;
	border-radius: 5px;
	background: #F0F8FF;
	list-style: none;
	overflow: hidden;
}

.experence li div {
    position: relative;
    height: 1.5em;
    background: #004792;
    font-size: 1em;
    color: white;
}

.experence .initLevel {
    position: absolute;
    right: 8px;
}

.experence .area {
    position: absolute;
    left: 8px;
}


.skills ul {
    padding: 0 35px 0;
}

.skills li {
    background: none;
    list-style: none;
}


</style>