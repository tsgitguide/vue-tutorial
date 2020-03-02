<template>
    <v-row dense>
        <v-col cols="6">
            <v-card
                :color="color"
                dark
            >
                <v-card-title class="headline"> Title </v-card-title>

                <v-card-subtitle> Subtitle </v-card-subtitle>

                <v-card-actions>
                    <v-btn text @click="delete_me()">Delete Me!</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import bus from '../eventBus';

export default {
    props: {
        index: {
            type: Number,
            default: 0
        },
    },

	data: function() {
		return {
            
		}
	},

	computed: {
		
	},

	watch: {

	},

	created: function() {

	},

	mounted: function() {

	},

	methods: {
        delete_me() {
            bus.$emit('delete_item', this.index);
        }
	}
}
</script>

<style scoped>
</style>