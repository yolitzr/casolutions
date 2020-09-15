<template>
	<div id="footer" class="footer">
		<p class="text-white text-center text-uppercase font-weight-bold">CA Solutions 2020</p>
		<p class="text-white text-center mt-3">Website Design by CA Solutions</p>
		<p class="text-white text-center mt-3">Copyright ©2020 All rights reserved.</p>
		<!-- <div class="footer-social d-flex justify-content-center mt-3">
			<a href="#" title="Twitter">
				<font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="footer-icon" />
			</a>
			<a href="#" title="GitHub">
				<font-awesome-icon :icon="['fab', 'github']" size="2x" class="footer-icon" />
			</a>
			<a href="#" title="LinkedIn">
				<font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="footer-icon" />
			</a>
		</div> -->
		
	</div>
	
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>
<style scoped>
#footer {
	background-color: #0C2340;
    padding: 3rem 0;
}

.footer small {
	font-size: 12px;
}
.footer p {
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	letter-spacing: -0.2px;
	margin-bottom: 0;
}

.footer-icon {
	margin: 5px;
    background: #808080;
    width: 45px;
    height: 45px;
    padding: 12px;
    border-radius: 50%;
    color: #ffffff;
}

.footer-icon:hover {
	opacity: .8;
}
</style>