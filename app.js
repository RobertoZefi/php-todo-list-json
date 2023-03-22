const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
        }
    },

    methods:{
        addNewTask(){
            $data = {
                task: {
                    text: this.newTask,
                    status: true
                }
            }
            axios.post('./server.php', $data,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                },
            }).then((res) => {
                this.tasks = res.data
            })
        },

        fetchTasks(){
            axios.get('./server.php')
            .then((res) => {
                this.tasks = res.data
            }).catch((err) => {
                console.log(err)
                this.tasks = []
            })
        },

        changeTrueFalse(element){
            if(element === true){
                this.tasks.status = false
            } else {
                this.tasks.status = true
            }
        }
    },

    mounted(){
        this.fetchTasks()
    }
}).mount('#app')
