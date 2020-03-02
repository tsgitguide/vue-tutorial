<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="new_item"
					label="請輸入新項目"
				>
				</v-text-field>
				<v-btn 
					color="primary" 
					@click="add_new_item()"
				>
					新增項目
				</v-btn>
			</v-col>
			
			<!-- 初階版 -->
			<v-col cols="12" sm="12">
				<h3>就只是普通的待辦事項：</h3>
				<h4 
					v-for="(item, index) in items" :key="index"
				>
					{{index+1}}. {{ item }}
				</h4>
			</v-col>

			<!-- 進階版 -->
			<v-col cols="12" sm="12">
				<h3>比較厲害的待辦事項：</h3>
				<Todo 
					v-for="(item, index) in items" :key="index"
					:index="index"
				>

				</Todo>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import bus from '../eventBus';
import Todo from './todo';

export default {
	components: {
		Todo
	},

	data: function() {
		return {
			new_item: "",
			items: ["吃飯", "睡覺", "打東東"],
			// subtitles: ["就是想吃飯", "就是想睡覺", "就是想打東東"],
			// colors: ["black", "blue", "brown"]
		}
	},

	computed: {
		
	},

	watch: {
		items: function() {
			alert('items變了！！');
		}
	},

	created: function() {

	},

	mounted: function() {
		bus.$on('delete_item', this.delete_item);
	},

	methods: {
		add_new_item() {
			this.items.push(this.new_item);
		},

		delete_item(index) {
			this.items.splice(index, 1);
		}
	}
}
</script>

<style scoped>
</style>