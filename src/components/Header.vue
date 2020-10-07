<template>
    <header id="home" class="full-height hero-img">
        <b-container>
            <div class="home-main mb-3 mx-auto">
                <h3 class="font-italic text-white position-relativ">{{subTitle}}</h3>
                <h1 class="position-relative text-uppercase font-weight-bold text-white">{{title}}</h1>
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
            btnName: 'Contact',
        }
    },

    // methods: {
    //     scrollanimate() {
    //         window.onscroll = () => {
    //                 let pageTop = this.scrollY;
    //             let pageHeight = this.outerHeight / 1 ;

    //             let frames = document.querySelectorAll('.scrollAnim');
    //             frames.forEach( frame => {
    //                 let frameTop = frame.offsetTop;
    //                 let frameHeight = frame.offsetHeight;

    //                 if( pageTop >= frameTop - pageHeight && pageTop < frameTop + frameHeight/1) {
    //                     frame.classList.add('anim')
    //                 }else{
    //                     frame.classList.remove('anim');
    //             }
    //         })
    //         }
    //   }
    // },

    // mounted() {
    //     this.scrollanimate();
    // }
}
</script>

<style scoped>
h1, h3 {
    transition: all 0.8s;
}

button {
    transition: all 1.2s;
}

.hero-img {
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; 
    position: relative;
    background-size: cover;
}

.hero-img:before {
   content: "";
   background: #4c4c4c80; 
   display: block;
   position: absolute;
   width: 100%;
   height: 100%;
   opacity: 0.9; 
}

#home {
    height: 100vh;
}

.home-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
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

@media (min-width: 375px) and (max-width: 767px) {
    .home-main h1 {
        font-size: 32px;
    }
    
    .home-main h3 {
        font-size: 18px;
    }

    .home-main button {
        width: 50%;
        font-size: 14px;
    }
}

@media (min-width: 768px) and (max-width: 920px) {
    .home-main {
        display: flex;
        flex-flow: wrap column;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
}

.scrollAnim{
    height: 100%;
    opacity: 0;
    transition: 0.8s;
    display: flex;
    padding: 0 120px;
}
.scrollAnim .content{
    margin: auto;
}
.scrollAnim.anim{
    opacity: 1;
}

.anim h1, .anim h2{
    transition-delay: 0.1s;
}

.anim-top{
    transform: translate(0,150px);
}
.anim-left{
    transform: translate(-150px,0);
}
.anim .anim-top{
    transform: translate(0,0);
}
.anim .anim-left{
    transform: translate(0,0);  
}

@keyframes fadeIn {
    from{ 
        opacity:  0; 
    }
    to{
        opacity: 1;
    }
}
@keyframes fadeInOut {
    0%{ 
        opacity:  0; 
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>