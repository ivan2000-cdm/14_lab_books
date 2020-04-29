<template>
	<div>
		<h1>404 ERROR!</h1>
	</div>
</template>

<script>
	export default {
		computed: {
			year() {
				return this.$route.query.year;
			},
		},
	};
</script>

<style scoped>
	
</style>