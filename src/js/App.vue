<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                
            }
        },

        computed: {

        },
        
        components: {
            
        },

        methods: {

        },
        
    }

</script>

<style>
    [v-cloak] {
        display: none;
    }

    body  {
        font-family:Meiryo, Arial,Verdana,Sans-Serif, Microsoft JhengHei; 
        margin: auto auto;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        width: 100%;
    }
</style>