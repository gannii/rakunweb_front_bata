<template>
	<div>
  
		<main>


			<section class="sec sec-info" data-type="list">
				
				<div class="inner max800">

					<div class="sec-head">
						<h2 class="h-md">
							<strong>全体お知らせ</strong>
						</h2>
					</div>

					<div class="sec-body" v-if="Object.keys($store.state.info_entire.data_entire_info).length > 0">

						<article v-for="content in $store.state.info_entire.data_entire_info">
							<div class="art-in">
								<time :datetime="`${content.publish_date}`"><i class="far fa-clock"></i>{{content.publish_date}}</time>
								<h3>{{content.title}}</h3>
								<nuxt-link :to="`/info-entire/${content.information_id}`"></nuxt-link>
							</div>
						</article>

					</div>
					<div v-else class="sec-body">
						<p style="text-align:center;">現在、全体お知らせはありません</p>
					</div>

					<div class="sec-foot" v-if="$store.state.info_entire.data_number > 10">

						<div class="pager list">
							<a class="prev" href="#">＜</a><div>
								<span>1</span><a href="#">2</a><a href="#">3</a>
							</div><a class="next" href="#">＞</a>
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
			title: '全体お知らせ',
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		} 
	},

	async fetch ({ app, store }) {

		let { data } = await app.$axios.$post('/information_entire/list',
		{
			"language": 1,
			"page_num": 1,
			"page_size": 10
		})

		console.log(data);
		store.commit('info_entire/SET_NUMBER', data.number)
		store.commit('info_entire/SET_PAGE_NUM', data.page_num)
		store.commit('info_entire/SET_ENTIRE_INFO', data.entire_info)
	
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