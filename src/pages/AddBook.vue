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
				<h3 class="h2Tittle m-0">Добавление книги</h3>
			</div>
			<hr class="m-0">
		</div>
		<form @submit.prevent>
			<div class="form-group row mb-0">
				<label 
					for="title" 
					class="col-sm-2 col-form-label"
				>
					Название книги 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<input 
						type="text" 
						class="form-control" 
						:class="{'is-invalid': titleBookError}"
						id="title"
						v-model="titleBook"
					>
					<div 
						class="invalid-feedback" 
						v-if="titleBookError"
					>
						Поле является обязательным
					</div>
				</div>
				
			</div>
			<div class="form-group row mb-0">
				<label 
					for="author" 
					class="col-sm-2 col-form-label"
				>
					Автор 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<input 
						type="text" 
						class="form-control" 
						id="author"
						:class="{'is-invalid': authorBookError}"
						v-model="authorBook"
					>
					<div 
						class="invalid-feedback" 
						v-if="authorBookError"
					>
						Поле является обязательным
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="data" 
					class="col-sm-2 col-form-label"
				>
					Год издания 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<input 
						type="number" 
						class="form-control datetimepicker-input" 
						id="data"
						:class="{'is-invalid': dataBookError}"
						v-model="dataBook"
					>
					<div 
						class="invalid-feedback" 
						v-if="dataBookError"
					>
						Поле является обязательным
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="image" 
					class="col-sm-2 col-form-label"
				>
					Обложка 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<div class="inputImg_1">
						<input 
						type="file" 
						class="form-control-file inputImg" 
						id="image"
						:class="{'is-invalid': imageBookError}"
						ref="file"
						accept="image/*"
						v-on:change="handleFileUpload()"
					>
					<div 
						class="invalid-feedback" 
						v-if="imageBookError"
					>
						Поле является обязательным
					</div>
					</div>
					<div class="inputImg_2" v-show="showPreview">
					<b-icon 
						icon="x-circle" 
						font-scale="2"
						@click="btmDelImg"
					/> 
				</div>
					<div class="img mt-2" v-show="showPreview">
						<img v-bind:src="imagePreview" />
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="title" 
					class="col-sm-2 col-form-label"
				>
					Описание книги 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<b-form-textarea
						id="textarea-formatter"
						placeholder="Пожалуйста введите текст"
						:class="{'is-invalid': textareaBookError}"
						v-model="textareaBook"
					></b-form-textarea>
					<div 
						class="invalid-feedback" 
						v-if="textareaBookError"
					>
						Поле является обязательным
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="author" 
					class="col-sm-2 col-form-label"
				>
					Выберите категорию 
					<span class="spamrRdStare2">*</span>
				</label>
				<div class="col-sm-10">
					<b-form-checkbox-group
						v-model="selected_main_cat"
						:options="book_cat_main"
						class="mb-3"
						value-field="categor"
						text-field="categor"
						disabled-field="notEnabled"
						:class="{'is-invalid': mainCatError}"
					></b-form-checkbox-group>
					<div 
						class="invalid-feedback" 
						v-if="mainCatError"
					>
						Выберите хотя бы одну категорию
					</div>
					<div class="mt-3">
						Выбранно: 
						<span
							v-for="(categors, id) in selected_main_cat"
							:key="id"
							class="textCategor badge-info"
						>
							{{ categors }}
						</span>
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="author" 
					class="col-sm-2 col-form-label"
				>
					Выберите дополнительую категорию
				</label>
				<div class="col-sm-10">
					<b-dropdown 
						id="dropdown-1" 
						text="Список категорий" 
						class="m-md-2"
					>
						<b-form-checkbox-group
							v-model="selected_additionally_cat"
							:options="book_cat_additionally"
							value-field="categor"
							text-field="categor"
							class="ml-4"
						></b-form-checkbox-group>
					</b-dropdown>
				</div>
				<div class="mt-3 col-sm-10">
					Выбранно: 
					<span
						v-for="(categors, id) in selected_additionally_cat"
						:key="id"
						class="textCategor badge-info"
					>
						{{ categors }}
					</span>
				</div>
			</div>
			<div class="form-group row mb-0">
				<label 
					for="title" 
					class="col-sm-2 col-form-label"
				>
					Не нашли нужную категорию? Добавьте её в список вручную
				</label>
				<div class="col-sm-10">
					<div>
						<div>
							<b-button
								:class="visible ? null : 'collapsed'"
								class="is-valid"
								variant="primary"
								:aria-expanded="visible ? 'true' : 'false'"
								aria-controls="collapse-4"
								@click="btnVisible"
							>
								Начать
							</b-button>
							<b-collapse 
								id="collapse-4" 
								v-model="visible" 
								class="mt-2"
							>
								<b-card>
									<div>
										<b-input-group>
											<b-form-input v-model.trim="addNewCatName"></b-form-input>
											<b-input-group-append>
												<b-button 
													variant="info"
													@click="addNewCat"
													:disabled="disabledAddCat"
												>
													Добавить
												</b-button>
											</b-input-group-append>
										</b-input-group>
									</div>
								</b-card>
							</b-collapse>
							<div 
								class="valid-feedback" 
								v-if="visible2"
							>
								Категория успешно добавлинна и выбранна
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="form-group row mb-0">
				<div class="mt-3 col-sm-10">
					Выбранно всего:
					<br>
					<span
						v-for="(categors, id) in selected_all_cat"
						:key="id"
						class="textCategor badge-info"
					>
						{{ categors }}
					</span>
				</div>
			</div>
			<p>OK: {{ ok }}</p>
			<p>FotoName: {{ fotoName }}</p>
			<p>imageExt: {{ imageExt }} </p>
			<div class="form-group row mb-0">
				<div class="col-sm-10">
					<p class="spamrRdStare">
						Поля отмечаанные 
						<span class="spamrRdStare2">
							<b>*</b>
						</span> 
						являются <b>обяяательными</b>
					</p>
					<br><br>
				</div>
				<div class="col-sm-10">
					<button 
						type="submit" 
						class="btn btn-primary"
						@click="btnAddBook"
					>
						Доьавить книгу
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	//import axios from 'axios';
	export default {
		data() {
			return {
				value: '',
				selected_main_cat: [], 
				book_cat_main: [],
				selected_additionally_cat: [],
				book_cat_additionally: [],
				selected_all_cat: [],
				addNewCatName: '',
				visible: false,
				visible2: false,
				disabledAddCat: true,
				titleBook: '',
				titleBookError: false,
				authorBook: '',
				authorBookError: false,
				dataBook: '',
				dataBookError: false,
				imageBook: '',
				imageBookError: false,
				textareaBook: '',
				textareaBookError: false,
				file: '',
				showPreview: false,
				imagePreview: '',
				ok: '',
				fotoName: '',
				image: '',
				imageExt: '',
			};
		},
		methods: {
			btmBack() {
				this.$router.push('/search');
			},
			btmDelImg() {
				this.showPreview = false;
			},
			addNewCat() {
				var book_cat_additionally = {
					categor: this.addNewCatName,
				}
				this.$http.post('http://localhost:3000/book_cat_additionally', book_cat_additionally)
				this.visible = false;
				this.visible2 = true;
				this.disabledAddCat = true;
				this.$http.get('http://localhost:3000/book_cat_additionally')
				.then(response => {
					return response.json();
				})
				.then(book_cat_additionally => {
					this.book_cat_additionally = book_cat_additionally;
				});
				this.selected_additionally_cat.unshift(this.addNewCatName);
				this.addNewCatName = '';
			},
			btnVisible() {
				this.visible = !this.visible;
				this.visible2 = false;
			},
			btnAddBook() {
				var error = false;
				if (this.titleBook.length > 0) {
					this.titleBookError = false;
				} else {
					this.titleBookError = true;
					error = true;
				}
				if (this.authorBook.length > 0) {
					this.authorBookError = false;
				} else {
					this.authorBookError = true;
					error = true;
				}
				if (this.dataBook.length > 0) {
					this.dataBookError = false;
				} else {
					this.dataBookError = true;
					error = true;
				}
				if (this.file != '') {
					this.imageBookError = false;
				} else {
					this.imageBookError = true;
					error = true;
				}
				if (this.textareaBook != '') {
					this.textareaBookError = false;
				} else {
					this.textareaBookError = true;
					error = true;
				}
				if (this.selected_main_cat != '') {
					this.mainCatError = false;
				} else {
					this.mainCatError = true;
					error = true;
				}
				//this.file = this.$refs.file.files[0];
				if (error == false) {
					this.ok = "Yes";

					//let formData = new FormData();
					//formData.append('file', this.file);

					//axios.post( '/src/img', formData, {headers: {'Content-Type': '/src/img'}});


					//this.imageExt = this.file.name.slice(this.file.name.lastIndexOf('.'));

					//const fileData a

					//this.$http.storage().ref(`img/${this.file.name}.${this.imageExt}`).put(this.file);

					const books = {
						title: this.titleBook,
						author: this.authorBook,
						release_date: new Date().getTime(), // Добавляем текущую дату в формате мил.секунд
						created: this.dataBook,
						discription: this.textareaBook,
						image: '../img/geroy-nashego-vremeni.jpg',
						//image: this.image,
						categor: this.selected_all_cat,
					}
					this.$http.post('http://localhost:3000/books', books)
				} else this.ok = "No";
				

				
			},
			handleFileUpload() {
				this.file = this.$refs.file.files[0];
				let reader  = new FileReader();
				reader.addEventListener("load", function () {
					this.showPreview = true;
					this.imagePreview = reader.result;
				}.bind(this), false);
				if( this.file ){
					if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
						reader.readAsDataURL( this.file );
						this.imageBookError = false;
						this.fotoName = this.file.name;
						this.imageExt = this.file.name.slice(this.file.name.lastIndexOf('.'));
					}
				}
			},
		},
		mounted() {
			this.$http.get('http://localhost:3000/book_cat_main')
				.then(response => {
					return response.json();
				})
				.then(book_cat_main => {
					this.book_cat_main = book_cat_main;
				});
			this.$http.get('http://localhost:3000/book_cat_additionally')
				.then(response => {
					return response.json();
				})
				.then(book_cat_additionally => {
					this.book_cat_additionally = book_cat_additionally;
				});
		},
		watch: {
			selected_main_cat() {
				this.selected_all_cat = this.selected_main_cat.concat(this.selected_additionally_cat);
				if (this.selected_main_cat != '') {
					this.mainCatError = false;
				} else {
					this.mainCatError = true;
				}
			},
			selected_additionally_cat() {
				this.selected_all_cat = this.selected_main_cat.concat(this.selected_additionally_cat);
			},
			addNewCatName() {
				if (this.addNewCatName != '') 
					this.disabledAddCat = false;
			},
			titleBook() {
				if (this.titleBook.length > 0) {
					this.titleBookError = false;
				} else {
					this.titleBookError = true;
				}
			},
			authorBook() {
				if (this.authorBook.length > 0) {
					this.authorBookError = false;
				} else {
					this.authorBookError = true;
				}
			},
			dataBook() {
				if (this.dataBook.length > 0) {
					this.dataBookError = false;
				} else {
					this.dataBookError = true;
				}
			},
			textareaBook() {
				if (this.textareaBook.length > 0) {
					this.textareaBookError = false;
				} else {
					this.textareaBookError = true;
				}
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
	.textCategor {
		padding: 0.3em;
		margin: 0.0em 0.3em 0.3em 0.0em;
		display: inline-block;
		border-radius: 0.3em;
		font-size: 0.9em;
	}
	.spamrRdStare {
		font-size: 0.8em;
		margin-bottom: -2em;
	}
	.spamrRdStare2 {
		color: red;
		font-size: 1.2em;
	}
	.img {
		width: 50%;
		border: 2px solid #111;
		border-radius: 10px;
	}
	.img img {
		width: 100%;
		border-radius: 8px;
	}
	.inputImg_1 {
		display: inline-block;
		width: 85%;
	}
	.inputImg_2 {
		display: inline-block;
		vertical-align: middle;
	}
</style>