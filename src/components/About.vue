<template>
    <div id="about" class="bg-about">
        <b-container fluid="xl">
            <b-row>
                <b-col class="text-center" data-aos="fade-up">
                    <h1 class="font-weight-bold">{{title}}</h1>
                    <div class="line"></div>
                    <p class="mt-3">
                        {{subTitle}}
                    </p>
                </b-col>
            </b-row>

            <b-row class="mt-4">
                <b-col lg="7" data-aos="fade-left">
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
                            <ul class="d-flex justify-content-center mt-4">
                                <li><img v-for="(groupOne, item) in gruopImgOne" :src="groupOne.url" :alt="groupOne.alt" :key="item"></li>
                            </ul>

                            <ul class="d-flex justify-content-center">
                                <li><img v-for="(groupTwo, item) in gruopImgTwo" :src="groupTwo.url" :alt="groupTwo.alt" :key="item"></li>
                            </ul>

                            <ul class="d-flex justify-content-center">
                                <li><img v-for="(groupThree, item) in gruopImgThree" :src="groupThree.url" :alt="groupThree.alt" :key="item"></li>
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

                <b-col lg="5" data-aos="fade-right">
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
            // Progress Bar
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
            ],
            
            // Grupo de Img
            gruopImgOne: [
                { url: require('../assets/logos/html.svg'), alt: 'HTML5'},
                { url: require('../assets/logos/css.svg'), alt: 'CSS3'},
                { url: require('../assets/logos/js.svg'), alt: 'JavaScript'},
                { url: require('../assets/logos/bootstrap.svg'), alt: 'Bootstrap'},
                { url: require('../assets/logos/tailwind.svg'), alt: 'Tailwind CSS'},
                { url: require('../assets/logos/vuejs.svg'), alt: 'VueJS'},
                { url: require('../assets/logos/wordpress.svg'), alt: 'Wordpress'}
            ],

            gruopImgTwo: [
                { url: require('../assets/logos/php.svg'), alt: 'PHP'},
                { url: require('../assets/logos/laravel.svg'), alt: 'Laravel'},
                { url: require('../assets/logos/nodejs.svg'), alt: 'NodeJS'},
                { url: require('../assets/logos/symfony.svg'), alt: 'Symfony'},
                { url: require('../assets/logos/java.svg'), alt: 'JAVA'},
                { url: require('../assets/logos/docker.svg'), alt: 'Docker'},
                { url: require('../assets/logos/mysql.svg'), alt: 'MySQL'},
                { url: require('../assets/logos/npm.svg'), alt: 'npm'}
            ],

            gruopImgThree: [
                { url: require('../assets/logos/webpack.svg'), alt: 'Webpack'},
                { url: require('../assets/logos/git.svg'), alt: 'Git'},
                { url: require('../assets/logos/gitkraken.svg'), alt: 'GitKraken'},
                { url: require('../assets/logos/github.svg'), alt: 'Github'},
                { url: require('../assets/logos/vsc.svg'), alt: 'Visual Studio Code'},
                { url: require('../assets/logos/sublimetext.svg'), alt: 'Sublime Text'}
            ],
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
.box-about {
    width: 95%;
}

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

.skills li img {
    padding: 5px;
}

@media (min-width: 600px) and (max-width: 800px) {
    #about {
        padding-left: 15px;
        padding-right: 15px;
    }

    .experence {
        padding-left: 15px;
        padding-right: 15px;
    }
}

</style>