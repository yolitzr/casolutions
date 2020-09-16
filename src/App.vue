<template>
	<div id="app">
		<b-navbar id="navbar" toggleable="md" type="dark" class="brand fixed-top">
            <b-container>
                <b-navbar-brand href="#" id="logo">
                    <img src="./assets/ca.png" alt="CA Designers" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav v-b-scrollspy="{offset:100, method:'auto'}" class="ml-auto">
                        <b-nav-item href="#home" class="active">Home</b-nav-item>
                        <b-nav-item href="#about">About Us</b-nav-item>
                        <!-- <b-nav-item href="#services">Services</b-nav-item>
                        <b-nav-item href="#technologies">Technologies</b-nav-item>
                        <b-nav-item href="#portfolio">Portfolio</b-nav-item> -->
                        <b-nav-item href="#contact">Contact</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
		<Header></Header>
		<About></About>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
        About,
        Services,
        Contact,
        Footer,
       
    },

	methods: {
        /* Shrink Navigation */
        scrollFunction() {
            window.onscroll = () => {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
                document.getElementById("navbar").style.background = "#0C2340";
                document.getElementById("navbar").style.color = "#ffffff";
                document.getElementById("navbar").style.transition = "all 0.5s";
                
                } else {
                    document.getElementById("navbar").style.background = "none";
                }
            }
        }
    },

    mounted () {
        /* Shrink Navigation */
        this.scrollFunction();
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap");

	*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.brand img {
    width: 35%;
    padding: 10px;
}

.navbar-dark .navbar-nav .nav-link a {
    color: rgb(255, 255, 255);
}

.navbar-dark .navbar-nav .nav-link.active {
    border-bottom: 3px solid rgba(195, 0, 255, 0.80);
}

.navbar-toggler {
    background-color: black;
    margin-right: 15px;
}

.line {
    background: linear-gradient(135deg, #800080 0%, #1d1160 100%);
    width: 100px;
    height: 2px;
    margin: 0 auto 15px;
}
</style>
