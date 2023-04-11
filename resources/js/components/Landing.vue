<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Hall Management</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-between" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
					</ul>
					<ul class="navbar-nav justify-content-between">
						<li v-if="login_status" class="nav-item" style="list-style:none">
							<button @click.prevent="goDashboard" class="btn nav-link" aria-current="page">Dashboard</button>
						</li>
						<li v-if="login_status" class="nav-item" style="list-style:none">
							<button @click.prevent="logout" class="btn btn-sm btn-outline-danger mt-1">Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container mt-5 mb-5">
			<h1 class="text-center mb-5">Login</h1>
			<div class="row justify-content-center">
				<div class="col-md-4">
					<form>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" v-model="email" class="form-control form-control-sm" id="email" placeholder="Enter email" required>
						</div>
						<div class="form-group mt-3">
							<label for="password">Password</label>
							<input type="password" v-model="password" class="form-control form-control-sm" id="password" placeholder="Password" required>
						</div>
						<button @click.prevent="submitForm" class="btn btn-sm w-100 btn-primary mt-3">Login</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:['login_status'],
	data() {
		return {
		email: '',
		password: ''
		};
	},
	computed:{
		loginStatus(){}
	},
	methods: {
		async submitForm() {
			try {
				const {data} = await axios.post('/login', {
					email:this.email,
					password: this.password
				});
				localStorage.setItem('user_name', data.user.name);
				localStorage.setItem('user_id', data.user.id);
				localStorage.setItem('user_role', data.user.role_id);
                this.$root.$emit('login');
				this.goDashboard();
				toast.fire({
					icon: 'success',
					title: 'Successfully Logged In'
				});
			} 
			catch (error) {
                this.$root.$emit('logout');
				toast.fire({
					icon: 'error',
					title: 'Email or password doesn\'t match'
				});
			}
		},
		goDashboard(){
			let user_role = localStorage.getItem('user_role');
            if (user_role == 1) {
                this.$router.push({ name: 'provost_dashboard' });
            }
			if (user_role == 2) {
                this.$router.push({ name: 'admin_dashboard' });
            }  
		},
        async logout(){
            try {
                const {data} = await axios.get('/logout');
                this.$root.$emit('logout');
            } 
            catch (error) {
                
            }
        }
	}
}
</script>
