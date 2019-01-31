<template>
	<div>
  
		<main>


			<section class="sec sec-info" data-type="single">
				
				<div class="inner max800">


					<div class="sec-body">

						<article>

							<div class="art-in">
								
								<div class="art-head">
									<time :datetime="`${$store.state.info_entire_single.data_entire_info.publish_date}`"><i class="far fa-clock"></i>{{$store.state.info_entire_single.data_entire_info.publish_date}}</time>
									<h3 class="h-md">{{$store.state.info_entire_single.data_entire_info.title}}</h3>
								</div>

								<div class="art-body">
									
									{{$store.state.info_entire_single.data_entire_info.body}}

								</div>

							</div>
							
						</article>

					</div>

					<div class="sec-foot">
						
						<div class="btns" data-col="2">
							<nuxt-link class="btn frame" to="/info-entire/">
								<img src="@/assets/svg/icon_back.svg" alt="">
							</nuxt-link><!--<a class="btn orange">
								<img src="../assets/svg/icon_check.svg" alt="">
							</a>-->
						</div>
						

					</div>
					
				</div>

			</section>


		</main>

	</div>
</template>


<script>

export default {

	head () {
		return {
			title: this.$store.state.info_entire_single.data_entire_info.title,
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		let { data } = await app.$axios.$get('/information_entire/' + params.information_id + '/1')

		console.log(data);
		store.commit('info_entire_single/SET_ENTIRE_INFO', data[0])
	
	},

	computed:{

	},

	mounted(){

	},

	methods: {

	}

}

</script>

<style scoped>

@import "~/assets/css/info.css"

</style>