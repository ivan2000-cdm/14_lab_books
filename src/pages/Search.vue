<template>
	<div class="marR2">
		<div class="fixed-top">
			<div class="divBlock_2">
				<h3 class="h2Tittle m-0">Поиск</h3>
			</div>
			<div class="divBlock pr-2">
				<b-icon 
					icon="plus" 
					font-scale="2"
					@click="btmAdd"
				/> 
			</div>
			<hr class="m-0">
		</div>
	</div>
		
		

	<!-- </body> -->
</template>

<script>
	export default {
		methods: {
			btmAdd() {
				this.$router.push('/addBook');
			},
		},
	};
	
</script>

<style scoped>
	.marR2 {
		margin: 0em;
		padding: 3em 2.9em 4em 2.9em;
	}
	.h2Tittle {
		background-color: #e3f2fd;
		font-weight: bold;
			
		}
	.divBlock {
		width: 12%;
		display: inline-block;
		position: relative;
		z-index: 2;
		
	}
	.divBlock_2 {
		width: 100%;
		margin-right: -12%;
		display: inline-block;
		text-align: center;
		position: relative;
		z-index: 1;


	}
</style>