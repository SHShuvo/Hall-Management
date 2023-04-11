<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                description:"",
                allTodos:[],
                errors:[],
            }
        },
        methods:{
            async createTodo(){
                this.errors=[];
                try {
                    const data = await axios.post('/api/create-todo',{
                        description:this.description
                    });
                    if(data.status == 201){
                        toast.fire({
                            icon: 'success',
                            title: 'New Created Successfully'
                        });
                        this.description = '';
                        this.allTodos.push(data.data);
                    }
                } 
                catch (e) {
                    if(e.response.status === 422){
                        this.errors = e.response.data.errors;
                    }
                    toast.fire({
                        icon: 'error',
                        title: e.response.data.msg?e.response.data.msg:'Enter data properly',    
                    })
                }
            },
            async loadTodos(){
                const {data} = await axios.get('/api/all-todos');
                this.allTodos = data;
            },
            async deleteTodo(id){
                const data = await axios.get(`/api/delete-todos/${id}`);
                if(data.status == 200){
                    let index = this.allTodos.findIndex(el=>el.id == id);
                    this.allTodos.splice(index,1);
                    toast.fire({
                        icon: 'success',
                        title: 'Todo Deleted'
                    });
                }
            }
        },
    }
</script>
<style scoped>
    .todo{
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        padding-bottom: .5rem;
    }
</style>
