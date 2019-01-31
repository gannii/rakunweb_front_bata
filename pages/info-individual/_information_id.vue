<template>
	<div>
  
		<main>


			<section class="sec sec-info" data-type="single">
				
				<div class="inner max800">


					<div class="sec-body">

						<article>

							<div class="art-in">
								
								<div class="art-head">
									<time :datetime="`${$store.state.info_individual_single.data_individual_info.created_at}`"><i class="far fa-clock"></i>{{$store.state.info_individual_single.data_individual_info.created_at}}</time>
									<h3 class="h-md">{{$store.state.info_individual_single.data_individual_info.title}}</h3>
								</div>

								<div class="art-body">
									
									{{$store.state.info_individual_single.data_individual_info.body}}

								</div>

							</div>
							
						</article>

					</div>

					<div class="sec-foot">
						
						<div class="btns" data-col="2">
							<nuxt-link class="btn frame" to="/info-individual/">
								<img src="@/assets/svg/icon_back.svg" alt="">
							</nuxt-link><a class="btn gray" @click="fn_confirm" v-if="$store.state.info_individual_single.confirm_status == 0">
								<img src="@/assets/svg/icon_check.svg" alt="">
							</a><span class="btn orange" v-else>
								<img src="@/assets/svg/icon_check.svg" alt="">
							</span>
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
			title: this.$store.state.info_individual_single.data_individual_info.title,
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		let { data } = await app.$axios.$get('/information_individual/' + params.information_id + '/' + store.state.login_account.account_name + '/1')

		console.log(data.confirm_status);
		store.commit('info_individual_single/SET_CONFIRM_STATUS', data.confirm_status)
		store.commit('info_individual_single/SET_INDIVIDUAL_INFO', data)
	
	},

	computed:{

	},

	mounted(){

	},

	methods: {

		fn_confirm() {

			this.$store.commit('info_individual_single/SET_CONFIRM_STATUS', 1)
			
			this.$axios.$patch('/information_individual/' + this.$route.params.information_id, 
          	{
				"account_name": this.$store.state.login_account.account_name
			})
			.then((res) => {
				console.log(res);
			})

		}

	}

}

</script>

<style scoped>

@import "~/assets/css/info.css"

</style>