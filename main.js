import App from './App'
import store from './store'
// #ifndef VUE3
import Vue from 'vue'
import PubFnc from './common/js/utils.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$pubFnc = PubFnc
App.mpType = 'app'

const app = new Vue({
	...App 
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
