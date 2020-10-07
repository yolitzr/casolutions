<template>
	<div id="contact" class="contact">
		<b-container fluid="lg">
			<b-row>
				<b-col class="mb-1 text-center" data-aos="slide-up">
					<h1 class="font-weight-bold">{{title}}</h1>
					<div class="line"></div>
					<p class="mt-3">{{subTitle}}</p>
				</b-col>
			</b-row>
				<b-col>
					<b-form @submit="onSubmit" @reset="onReset" v-if="show">
						<b-row class="mt-5 contact-form" align-v="start">
							<b-col lg="5" cols="12" class="contact-info" data-aos="fade-up-left">
								<div class="icon-address">
									<font-awesome-icon :icon="['fas', 'map-marker-alt']" size="1x"/> 
									<span>Córdoba, Argentina</span>
								</div>
								<div class="icon-address">
									<font-awesome-icon :icon="['fas', 'envelope']" size="1x"/> 
									<span>info@casolutions.tech</span>
								</div>
								<div class="d-flex justify-content-start mt-1 social-icon">
									<a href="#" title="Twitter">
										<font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="social-address" />
									</a>
									<a href="#" title="GitHub">
										<font-awesome-icon :icon="['fab', 'github']" size="2x" class="social-address" />
									</a>
									<a href="#" title="LinkedIn">
										<font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="social-address" />
									</a>
								</div>
							</b-col>
							
							<b-col lg="7" cols="12" data-aos="fade-up-right">
								<b-form-input
									id="name"
									v-model="form.name"
									type="text"
									required
									placeholder="Introducir Nombre"
								></b-form-input>

								<b-form-input
									id="email"
									v-model="form.email"
									type="email"
									required
									placeholder="Introducir email"
								></b-form-input>

								<b-form-textarea
									id="textarea"
									v-model="text"
									placeholder="Introudcir mensaje"
									no-resize
								>
								</b-form-textarea>
								<pre> {{text}} </pre>
								
								<b-button type="submit">Enviar Mensaje</b-button>
							</b-col>
						</b-row>
					</b-form>
				</b-col>
			<b-row>

			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
		data (){
			return {
				title: `Let's Work Together`,
				subTitle: 'Please, use the form below or send an email.',
				show: true,
				text: '',
				form: {
					name: '',
					email: '',
				}
			}
		},
		methods: {
			onSubmit(evt) {
				evt.preventDefault()
				alert(JSON.stringify(this.form))
			},

			onReset(evt) {
				evt.preventDefault()
				this.form.email = ''
				this.form.name = ''
				this.show = false
				this.$nextTick(() => {
				this.show = true
				})
			},
		}
	}
</script>

<style scoped>
#contact {
	padding: 4rem 0;
}

textarea.form-control {
	height: 200px;
}

.contact-form input {
	padding: 20px;
	margin-bottom: 20px;
}

.contact-form button {
	width: 200px;
	padding: 15px;
}

.form-control:focus {
	border-color: #0071c5;
    box-shadow: none;
	box-shadow: 0 0 0 0.2rem rgba(195, 0, 255, 0.100);
}

.icon-address {
	padding: 5px;
}

.icon-address span {
	margin-left: 15px;
}

.social-address {
	margin: 5px;
    background: #808080;
    width: 45px;
    height: 45px;
    padding: 12px;
    border-radius: 50%;
    color: #ffffff;
}

.social-address:hover {
	opacity: .8;
}
@media (min-width: 375px) and (max-width: 767px) {
	
	#contact {
		padding-right: 10px;
		padding-left: 10px;
	}
	
	.contact-info {
		display: grid;
		justify-items: center;
		margin-bottom: 25px;
	}
	
	.social-icon {
		display: grid;
		justify-items: center;
	}

	.social-address {
		margin: 5px;
		background: #808080;
		width: 38px;
		height: 38px;
		padding: 12px;
		border-radius: 50%;
		color: #ffffff;
}
}

@media (min-width: 768px)  and (max-width: 920px) {
	#contact {
		padding-right: 10px;
		padding-left: 10px;
	}

	.contact-info {
		display: grid;
		justify-items: center;
		margin-bottom: 25px;
	}
	
	.social-icon {
		display: grid;
		justify-items: center;
	}
}
</style>