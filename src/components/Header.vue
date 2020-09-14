<template>
    <header id="home" class="full-height">
        <b-container>
            <div class="home-main text-center mb-3 d-lg-block  mx-auto">
                <h3 class="d-block font-italic text-white position-relative">{{subTitle}}</h3>
                <h1 class="d-block position-relative text-uppercase font-weight-bold text-white">{{title}}</h1>
                <b-button class="btn-home position-relative mt-4 p-3 rounded-pill text-uppercase">{{btnName}}</b-button>
            </div>
        </b-container>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            title: 'Ca Solutions',
            subTitle: 'Welcome to',
            btnName: 'Contact'
        }
    },
    props: {
        msg: String,
        bgColor: {
            type: String,
            default: "#0099CC"
        },
        textShadow: {
            type: String,
            default: '#0076CE',
        }
    },

    computed: {
        cssVars() {
            return {
                '--bg-color': this.bgColor,
                '--dell-blue': this.textShadow,
            }
        }
    }
}
</script>

<style scoped>
header {
    background-image: linear-gradient(rgba(82, 82, 82, 0.6), rgba(82, 82, 82, 0.6)), url(../assets/bg.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}

.home-main {
    padding-top: 250px;
    padding-bottom: 250px;
}

.home-main h1 {
    font-family: 'Merriweather Sans', sans-serif;
    letter-spacing: 0.2rem;
    font-size: 65px;
    text-shadow: 2px 2px 5px #2B4891;
}

.btn-home {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-color: #2B4891;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

/* .btn-home:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-home:focus {
    outline: none;
}

.btn-home.btn-h {
    background-image: linear-gradient(to right, #0e549f, #d740e4, #3033dd, #a418b7);
    box-shadow: 0 0 15px 0 rgba(210, 210, 210, 0.75);
} */

.full-height {
    height: 100vh;
}
</style>