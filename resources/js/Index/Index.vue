<template>
    <div>
        <div>
            <router-view :login_status="login_status"></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            login_status:false,
        }
    },
    methods:{
        removeUser(){
			this.login_status = false;
			localStorage.removeItem('user_name');
			localStorage.removeItem('user_id');
			localStorage.removeItem('user_role');
		},
		async checkAuth(){
			this.loading = true;
			try {
				const {data} = await axios.get('/user-status/check');
				this.login_status = true;
			} 
			catch (error) {
				this.removeUser();
                this.$router.push({ name: 'landing' });
			}
			finally{
				this.loading = false;
			}
		}
    },
    mounted(){
        this.$root.$on('logout',()=>{
            this.removeUser();
        });
        this.$root.$on('login',()=>{
			this.login_status = true;
        });
    },
    created(){
        this.checkAuth();
    }
}
</script>