
export const state = () => ({

	confirm_status: 0,
	data_individual_info: null

})

export const mutations = {

	SET_INDIVIDUAL_INFO: function (state, item) {
		state.data_individual_info = item
	},
	SET_CONFIRM_STATUS: function (state, item) {
		state.confirm_status = item
	}

}

export const actions = {

}
