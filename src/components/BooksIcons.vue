<template>
	<div class="col-4 marR">
		<router-link 
			tag="div"
			class="card-body p-0 text-center" 
			:to="{name: 'bookContent', query: {books: books}}"
			active-class="active"
      >
			<img :src="books.image" class="card-img-top" alt="...">
			<p class="card-text">{{ books.title }}</p>
      </router-link>
		</div>
</template>

<script>
	export default {
		props: [  
			'books',
			'booksID'
		],
		data() {
			return {
				test: 'test11111',
			};
		},
	};
	
</script>

<style scoped>
.marR {
		margin: 0em;
		padding: 0.5em 0.4em 0em 0em;
		font-size: 0.7em;
	}

</style>