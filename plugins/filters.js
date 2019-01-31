import Vue from "vue";
import dayjs from "dayjs";


Vue.filter('formatDate', function (value) {
	if (value) {
		return dayjs().format('YYYY/MM/DD hh:mm')
	}
})