import VueRoure from 'vue-router'
import ErrorCmp from './pages/Error.vue'
import Home from './pages/Home.vue'
import Search from './pages/Search.vue'
import Book from './pages/Book.vue'
import Person from './pages/Person.vue'
import BookContent from './pages/BookContent.vue'
import AllBooksByCategory from './pages/AllBooksByCategory.vue'
import AddBook from './pages/AddBook.vue'

export default new VueRoure ({
	routes: [
		{
			path: '*',
			component: ErrorCmp,
		},
		{
			path: '/none',
			redirect: {
				name: '',
			},
		},
		{
			path: '/',
			component: Home,
			name: 'Home',
		},
		{
			path: '/search',
			component: Search,
			name: 'Search',
		},
		{
			path: '/book',
			component: Book,
			name: 'Book',
		},
		{
			path: '/person',
			component: Person,
			name: 'Person',
		},
		{
			path: '/bookContent',
			component: BookContent,
			name: 'bookContent',
		},
		{
			path: '/allBooksByCategory',
			component: AllBooksByCategory,
			name: 'allBooksByCategory',
		},
		{
			path: '/addBook',
			component: AddBook,
			name: 'addBook',
		}
	],
	mode: 'history',
})