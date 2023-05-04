<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-md-12">
                <div class="tab-system">
                    <ul class="nav nav-tabs" role="tablist">
                        <li v-for="(menu, index) in tabMenues" :key="'tab'+index" class="nav-item">
                            <router-link :to="{name:menu.name}" class="nav-link" data-toggle="tab" role="tab" :tabindex="index+1">{{menu.title}}</router-link>
                        </li>
                        <li class="nav-item" style="margin-left:auto">
                            <button @click.prevent="logout" class="btn btn-sm btn-outline-danger mt-1">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mt-2">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabMenues:[
                { title:'Profile', name:'student_profile'},
                { title:'Certificate', name:'student_certificate'},
            ],
        }
    },
    methods:{
        removeUser(){
			localStorage.removeItem('user_name');
			localStorage.removeItem('user_id');
			localStorage.removeItem('user_role');
		},
        async logout(){
            try {
                const {data} = await axios.get('/logout');
                this.$root.$emit('logout');
                this.$router.push({ name: 'landing' });
            } 
            catch (error) {
                
            }
        }
    }
}
</script>
<style scoped>
.btn-logout {
    color: #dc3545;
    font-weight: 600;
    padding: 0.5rem 1rem;
}
</style>