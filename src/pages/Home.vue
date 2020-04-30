<template>
	<body data-spy="scroll" data-target="#navbarCodeply" data-offset="70">
		<div class="fixed-top navbar-expand-lg p-0 nav-fill">
			<h3 class="h2Tittle m-0">
				Главная
				<hr class="m-0">
			</h3>
			<div>
			<div class="divNav">
				<nav class="nav nav-pills nav-justified navbar-light bg-light" id="navbarCodeply">
					<a class="nav-item nav-link" href="#newBooks">Новинки</a>
					<a class="nav-item nav-link" href="#classicBooks">Классика</a>
					<a class="nav-item nav-link" href="#fantasyBooks">Фантастика</a>
				</nav>
			</div>
			</div>
		</div>
		<div class="main">
			 <h4 id="newBooks">Новинки</h4>
			<div class="row mar">
				<booksIcons 
					v-for="book in filterNewBooks"
					:key="book.id"
					:books="book" 
				/>
				<router-link 
					tag="div"
					class="col-4 marR pt-3" 
					:to="{name: 'allBooksByCategory', query: {books: books, titleName: 'Новинки'}}"
					active-class="active"
				>
					<div class="card text-center">
						<div class="card-body">
							<p class="card-text">. . .</p>
						</div>
					</div>
				</router-link>
			</div> 
			 <h4 id="classicBooks">Классика</h4>
			<div class="row mar">
				<booksIcons 
					v-for="book in filterClassicBooks"
					:key="book.id"
					:books="book" 
				/>
				<router-link 
					tag="div"
					class="col-4 marR pt-3" 
					:to="{name: 'allBooksByCategory', query: {books: books, titleName: 'Классика'}}"
					active-class="active"
				>
					<div class="card text-center">
						<div class="card-body">
							<p class="card-text">. . .</p>
						</div>
					</div>
				</router-link>
			</div> 
			 <h4 id="fantasyBooks">Фантастика</h4>
			<div class="row mar">
				<booksIcons 
					v-for="book in filterFantasyBooks"
					:key="book.id"
					:books="book" 
				/>
				<router-link 
					tag="div"
					class="col-4 marR pt-3" 
					:to="{name: 'allBooksByCategory', query: {books: books, titleName: 'Фантастика'}}"
					active-class="active"
				>
					<div class="card text-center">
						<div class="card-body">
							<p class="card-text">. . .</p>
						</div>
					</div>
				</router-link>
			</div> 
		</div>
	</body>
</template>

<script>
	 import BooksIcons from '../components/BooksIcons.vue';
	export default {
		data() {
			return {
				books: [],
			};
		},
		components: {
			 booksIcons: BooksIcons
		},
		mounted() {
			this.$http.get('http://localhost:3000/books')
				.then(response => {
					return response.json()
				})
				.then(books => {
					this.books = books
				});
		},
		computed: {
			filterNewBooks(){
				var books = this.books;
				return books.filter(function (books) {
					return books.id <= 5
				})
			},
			filterClassicBooks(){
				var books = this.books;
				return books.filter(function (books) {
					return books.id <= 5
				})
			},
			filterFantasyBooks(){
				var books = this.books;
				return books.filter(function (books) {
					return books.id <= 5
				})
			},
		},
	};
</script>

<style scoped>
	.h2Tittle {
		background-color: #e3f2fd;
		text-align: center;
		font-weight: bold;
	}
	body {
		background-color: #e3f2fd;
		/*padding-top: 5rem;*/
		padding: 0rem 1.8rem 0rem 1.8rem;
	}
	.nav-link {
		padding: 0.1rem 0.3rem 0.1rem 0.3rem;
	}
	.divNav {
		width: 85%;
		margin: auto;
		padding-top: 0.4rem;
		padding-bottom: 0.4rem;
	}
	.divNav nav {
		border-radius: 0.3rem;
		border: 0.4px solid #222;
		padding: 0.1rem 0.1rem 0.1rem 0.1rem;
	}
	body div div {
		padding: 0px;
		width: 100%;
		background-color: #e3f2fd;
	}
	.main h4:before {
		height: 5rem;
		content: "";
		display:block;
	}
	.mar {
		margin: 0px;
	}

</style>


<!-- Сортировка!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

computed: {

	filterNewBooks(){
		var books = this.books;
		return books.filter(function (books) {
			return books.id <= 10
		})
	},

	filterNewBooks(){
		var books = this.books;
		var index;
		return books.filter(function (books) {
			for (var i = books.categor.length - 1; i >= 0; i--) {
				if (books.categor[i] == 'new') {
					index = i;
					break;
				}
			}
			return books.categor[index] == 'new';
		});
	},
} -->