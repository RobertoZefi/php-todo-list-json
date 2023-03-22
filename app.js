const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [],
        }
    },

    methods:{
        fetchTasks(){
            axios.get('./server.php')
            .then((res) => {
                this.tasks = res
            })
        }
    },

    mounted(){
        this.fetchTasks()
    }
}).mount('#app')
