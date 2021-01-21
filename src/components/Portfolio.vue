<template>
    <b-container fluid="lg" id="portfolio">
        <b-row>
            <b-col class="text-center" data-aos="flip-down">
                <h1 class="font-weight-bold">Portfolio</h1>
                <div class="block"></div>
                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor <br> incididunt ut labore et dolore magna aliqua.</p>
                </b-col>
            </b-row>
            <b-row class="d-flex justify-content-center mt-5">
                <b-col lg="3" md="6" align="center" data-aos="zoom-in">
                    <div class="portfolio">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg" />
                        <!-- <h3 class="mt-3 text-white">Card title</h3>
                            <p>Card description</p> -->
                    </div>
                </b-col>
                <b-col lg="3" md="6" align="center" data-aos="zoom-in">
                    <div class="portfolio">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg" />
                        <!-- <h3 class="mt-3 text-white">Card title</h3>
                            <p>Card description</p> -->
                    </div>
                </b-col>
                <b-col lg="3" md="6" align="center" data-aos="zoom-in">
                    <div class="portfolio">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg" />
                        <!-- <h3 class="mt-3 text-white">Card title</h3>
                        <p>Card description</p> -->
                    </div>
                </b-col>

                <b-col lg="3" md="6" align="center" data-aos="zoom-in">
                    <div class="portfolio">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample45.jpg" />
                        <!-- <h3 class="mt-3 text-white">Card title</h3>
                        <p>Card description</p> -->
                    </div>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    msg: String
  },
}
</script>

<style scoped>
#portfolio {
        padding: 4rem 0;
    }

.portfolio h3 {
	font-size: 25px;
    position: absolute;
    bottom: 10px;
    left: 0;
}
.portfolio p {
	font-size: 14px;
	position: absolute;
}
.portfolio img {
	width: 270px;
    height: 320px;
	box-shadow: 0 0 20px #00479250;
	position : relative;
    border-radius: 5px;
}
.portfolio img:hover {
	opacity: 0.7;
}
</style>