<template>
	<view>
		<view>登录状态:{{ isLogin }} 登录状态:{{ hasLogin }}</view>
		<button @click="login(true)">登录</button>
		<button @click="login(false)">退出</button>
	</view>
	
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {};
	},
	computed: mapState({
		isLogin: state => state.isLogin,
		// 传字符串参数'isLogin' 等同于`state=>state.isLogin`
		hasLogin: 'isLogin'
	}),
	// computed:{
	// 	...mapState(['isLogin'])
	// }
	methods:{
		// 登录
		login(val){
			this.$store.commit('storeLogin',val)
		}
	}
};
</script>

<style lang="scss"></style>
