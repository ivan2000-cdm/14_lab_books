<template>
	<div class="card marR">
		<button 
			type="button" 
			class="btn btn-info btn-block fixed-top btnBack p-0"
			@click="btmBack"
		>
			<b-icon icon="arrow-left" /> 
          <span>Вернуться назад</span>
       </button>
		<img :src="books.image" class="card-img-top" alt="...">
		<div class="card-body text-center">
			<h3 class="card-title">
				<ins>{{ books.title }}</ins></h3>
		</div>
		<table class="table">
			<tbody>
				<tr>
					<th scope="row">Автор:</th>
					<td>{{ books.author }}</td>
				</tr>
				<tr>
					<th scope="row">Год издания:</th>
					<td>{{ books.created }}</td>
				</tr>
				<tr>
					<th scope="row">Дата публикации:</th>
					<td>{{ release_date() }}</td>
				</tr>
				<tr>
					<th scope="row">Жанр:</th>
					<td>
						<p 
							class="textCategor badge-info" 
							v-for="(categors, id) in books.categor"
							:key="id"
						>
							{{ categors }}
						</p>
					</td>
				</tr>
			</tbody>
		</table>
		<p>Описание: {{ books.discription }} </p>
		<button type="button" class="btn btn-info">Добавить в издбранные</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			books() {
				return this.$route.query.books;
			},
		},
		methods: {
			btmBack() {
				this.$router.push('/');
			},
			release_date() { // ф-ия для перевода мил.секунд в формат дд.мм.гггг
				var release_date = this.books.release_date; // Получаем из массива дату ввиде мил.секунд
				var d = new Date(release_date); // Переобразовываеи мил.сек. в обычную дату (полную)
				var date = d.getUTCDate(); // Вытаскиваем день
				if (date < 10) date = '0'+date; // проверяем день и добавляем в начале '0' если < 10
				var month = d.getUTCMonth() + 1; // Вытаскиваем месяц
				if (month < 10) month = '0'+month; // проверяем месяц и добавляем в начале '0' если < 10
				var year = d.getUTCFullYear(); // Вытаскиваем год
				var data = ( date + "." + month + "." + year ); // Собираем всё в привычный вид
				return data; // Возращаем переменную в красивом формате дд.мм.гггг
			}
		},
	};
	
</script>

<style scoped>
.marR {
	margin: 0em;
	padding: 0em 2em 4em 2em;
}
.btnBack {
	font-size: 1.2em;
	vertical-align: middle;
}
.textCategor {
	padding: 0.3em;
	margin: 0.0em 0.3em 0.3em 0.0em;
	display: inline-block;
	border-radius: 0.3em;
	font-size: 0.9em;
}
</style>