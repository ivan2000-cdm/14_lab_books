<template>
	<div class="marR2">
		<div class="fixed-top">
			<div class="divBlock pl-2">
				<b-icon 
					icon="chevron-left" 
					font-scale="2"
					@click="btmBack"
				/> 
			</div>
			<div class="divBlock_2">
				<h3 class="h2Tittle m-0">
					{{ titleName }}
				</h3>
			</div>
			<hr class="m-0">
		</div>


		<div class="main">
			<div class="row mar p-0">
				<booksIcons 
					v-for="book in books"
					:key="book.id"
					:books="book" 
				/>
			</div>
		</div>

	</div>
</template>

<script>
	import BooksIcons from '../components/BooksIcons.vue';
	export default {
		data() {
			return {
				test_2: 'test_2',
			};
		},
		components: {
			booksIcons: BooksIcons
		},
		computed: {
			books() {
				return this.$route.query.books;
			},
			titleName() {
				return this.$route.query.titleName;
			},
		},
		methods: {
			btmBack() {
				this.$router.push('/');
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
			
		}
	.divBlock {
		width: 30%;
		display: inline-block;
		position: relative;
		z-index: 2;
	}
	.divBlock_2 {
		width: 100%;
		margin-left: -30%;
		display: inline-block;
		text-align: center;
		position: relative;
		z-index: 1;
	}

		
</style>