<template>
    <div id="about" class="bg-about">
        <b-container fluid="xl">
            <b-row>
                <b-col class="text-center">
                    <h1 class="font-weight-bold">{{title}}</h1>
                    <div class="block"></div>
                    <p class="mt-3">
                        {{subTitle}}
                    </p>
                </b-col>
            </b-row>
            <b-row class="d-flex justify-content-center mb-5 mt-5">
                <b-col col lg="4" cols="12" class="about-us mt-4"  align="center">
                    <h3 class="d-inline-block">
                        <span>
                            <font-awesome-icon :icon="['fas', 'desktop']" size="2x" class="about-icon mr-2" />
                        </span>
                        Our Process
                    </h3>
                    <p class="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </b-col>
                <b-col col lg="4" cols="12" class="about-us mt-4" align="center">
                    <h3 class="d-inline-block">
                        <span>
                            <font-awesome-icon :icon="['fas', 'tasks']" size="2x" class="about-icon mr-2" />
                        </span>
                        Our Goal
                    </h3>
                    <p class="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </b-col>
                <b-col col lg="4" cols="12" class="about-us mt-4" align="center">
                    <h3 class="d-inline-block">
                        <span>
                            <font-awesome-icon :icon="['fas', 'hands-helping']" size="2x" class="about-icon mr-2" />
                        </span>
                        Our Mission
                    </h3>
                    <p class="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <b-row class="d-flex justify-content-center mt-4">
				<b-col lg="3" md="3"  align="center" class="box-services my-1 mx-2">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'code']" size="3x" class="services-icon"/>
					</div>
					<div  class="title">
						<h2 class="mt-4">Web Responsive</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
				</b-col>
				<b-col lg="3" md="3" align="center" class="box-services my-1 mx-2">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'paint-brush']" size="3x" class="services-icon"/>
					</div>
					<div class="title">
						<h2 class="mt-4">Software Architecture</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
				</b-col>
                <b-col lg="3" md="3"  align="center" class="box-services my-1 mx-2">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'code']" size="3x" class="services-icon"/>
					</div>
					<div  class="title">
						<h2 class="mt-4">Web Responsive</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
				</b-col>
				<b-col lg="3" md="3" align="center" class="box-services my-1 mx-2">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'shopping-cart']" size="3x" class="services-icon"/>
					</div>
					<div class="title">
						<h2 class="mt-4">E-commerce</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
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
            title: 'About Us and Our Services',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
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

.box-services {
	padding: 20px 20px;
    background-color: #fff;
    vertical-align: middle;
	max-width: 350px;
	box-shadow: 0 0 5px #004792;
}

.line-top-left, .line-bottom-right {
    height: 150px;
    width: 150px;
    border: 2px solid #004792;
    position: absolute;
}


.line-top-left {
    border-bottom: 0;
    border-right: 0;
    top: 15px;
    left: 15px;
}

.line-bottom-right {
    border-top: 0;
    border-left: 0;
    bottom: 15px;
    right: 15px
}

.title h2 {
	font-family: 'Montserrat', sans-serif;
	font-size: 20px;
}

.desc p{
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	letter-spacing: -0.2px;
	line-height: 1.5rem;
	padding: 5px 20px;
}

.services-icon {
	border-radius: 50%;
    border: 2px solid rgb(180, 116, 230);
    padding: 20px;
    height: 80px;
    width: 80px;
}
</style>