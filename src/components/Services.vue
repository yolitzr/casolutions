<template>
    <div id="services">
        <b-container fluid="xl">
            <b-row>
                <b-col class="text-center" data-aos="flip-down">
                    <h1 class="font-weight-bold">{{title}}</h1>
                    <div class="line"></div>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <b-row class="d-flex justify-content-center mt-4">
				<b-col lg="3" md="6" xl="4"  align="center" class="box-services" data-aos="flip-up" data-aos-delay="200">
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
				<b-col lg="3" md="6" xl="4" align="center" class="box-services" data-aos="flip-up" data-aos-delay="400">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'paint-brush']" size="3x" class="services-icon"/>
					</div>
					<div class="title">
						<h2 class="mt-4">Landing Page</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
				</b-col>
                <b-col lg="3" md="6" xl="4" align="center" class="box-services" data-aos="flip-up" data-aos-delay="600">
					<div class="services-img p-4" align="center">
						<font-awesome-icon :icon="['fas', 'code']" size="3x" class="services-icon"/>
					</div>
					<div  class="title">
						<h2 class="mt-4">Intitutional Website</h2>
					</div>
					<div class="desc">
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="line-top-left"></div>
					<div class="line-bottom-right"></div>
				</b-col>
				<b-col lg="3" md="6" xl="4" align="center" class="box-services" data-aos="flip-up" data-aos-delay="800">
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
        name: 'Services',
        data () {
            return {
                title: 'Our Services'
            }
        }
    }
</script>

<style scoped>
    #services {
        padding: 4rem 0;
    }
    
    .box-services {
        padding: 20px 20px;
        background-color: #fff;
        vertical-align: middle;
        max-width: 280px;
        box-shadow: 0 0 5px #004792;
        margin-left: 7px;
        margin-right: 7px;
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

@media (min-width: 375px) and (max-width: 600px) {
    .box-services {
        margin-bottom: 25px;
    }
}

@media (min-width: 767px) {
    .box-services {
        margin: 15px;
    }
}
</style>