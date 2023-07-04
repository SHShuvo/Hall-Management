<template>
<div>
    <div class="d-flex justify-content-between mt-3">
        <h6 class="text-danger fw-bold">Admins</h6>
        <button @click.prevent="addAdmin" class="btn btn-sm btn-primary">Add Admin</button>
    </div>
    <div class="mt-4">
        <table class="table table-sm table-bordered">
            <thead>
                <tr class="table-danger">
                    <th>SN.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ad, index) in admins" :key="'ad'+index">
                    <td>{{index+1}}</td>
                    <td>{{ad.name}}</td>
                    <td>{{ad.email}}</td>
                    <td>{{ad.phone}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="modal fade" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Admin</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <form autocomplete="off">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" v-model="adminForm.name" placeholder="Name" class="form-control form-control-sm" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="phone">Phone</label>
                                <input type="phone" v-model="adminForm.phone" class="form-control form-control-sm" placeholder="Phone" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="email">Email</label>
                                <input type="email" autocomplete="off" v-model="adminForm.email" class="form-control form-control-sm" placeholder="Email" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="password">Password</label>
                                <input type="password" autocomplete="off" v-model="adminForm.password" class="form-control form-control-sm" placeholder="Password" required>
                            </div>
                            <button @click.prevent="registerAdmin" class="btn btn-sm w-100 btn-primary mt-3">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { Modal } from 'bootstrap';
export default {
    data(){
        return{
            myModal:{},
            adminForm:{
                name:'',
                email:'',
                password:'',
                phone:'',
            },
            admins:[],
        }
    },
    methods:{
        addAdmin(){
            this.myModal = new Modal(document.getElementById('myModal'));
    		this.myModal.show();
        },
        async registerAdmin(){
            try {
                const {data} = await axios.post('/register-admin',this.adminForm);
                this.loadAdmins();
                this.adminForm = {
                    name:'',
                    email:'',
                    password:'',
                    phone:'',
                };
    		    this.myModal.hide();
				toast.fire({
					icon: 'success',
					title: 'Successfully Registered'
				});
			} 
			catch (error) {
				toast.fire({
					icon: 'error',
					title: 'Try again'
				});
			}
        },
        async loadAdmins(){
            const {data} = await axios.get('/admins');
            this.admins = data;
        }
    },
    created(){
        this.loadAdmins();
    }
}
</script>
<style scoped>

</style>