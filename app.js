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
                this.tasks = res.data
            }).catch((err) => {
                console.log(err)
                this.tasks = []
            })
        }
    },

    mounted(){
        this.fetchTasks()
    }
}).mount('#app')
