
export const state = () => ({

	data_number: null,
	data_page_num: null,
	data_entire_info: null

})

export const mutations = {

	SET_NUMBER: function (state, item) {
		state.data_number = item
	},
	SET_PAGE_NUM: function (state, item) {
		state.data_page_num = item
	},
	SET_ENTIRE_INFO: function (state, item) {
		state.data_entire_info = item
	}

}

export const actions = {

}
