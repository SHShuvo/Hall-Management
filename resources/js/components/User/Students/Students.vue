<template>
<div>
    <div class="d-flex justify-content-between mt-3">
        <h6 class="text-danger fw-bold">Students</h6>
        <button @click.prevent="addStudent" class="btn btn-sm btn-primary">Add Student</button>
    </div>
    <div class="mt-4">
        <table class="table table-sm table-bordered">
            <thead>
                <tr class="table-secondary">
                    <th>SN.</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stu, index) in students" :key="'stu'+index">
                    <td>{{index+1}}</td>
                    <td>{{stu.name}}</td>
                    <td>{{stu.roll}}</td>
                    <td>{{}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="modal fade" id="myModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Student</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" v-model="studentForm.name" placeholder="Name" class="form-control form-control-sm" required>
                            </div>
                            <div class="form-group mt-3">
                                <label>Roll</label>
                                <input type="text" v-model="studentForm.roll" placeholder="Roll" class="form-control form-control-sm" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="email">Email</label>
                                <input type="email" v-model="studentForm.email" class="form-control form-control-sm" required>
                            </div>
                            <!-- <div class="form-group mt-3">
                                <label for="password">Password</label>
                                <input type="password" v-model="studentForm.password" class="form-control form-control-sm" id="password" placeholder="Password" required>
                            </div> -->
                            <button @click.prevent="registerStudent" class="btn btn-sm w-100 btn-primary mt-3">Register</button>
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
            studentForm:{
                name:'',
                roll:'',
                email:'',
            },
            students:[],
        }
    },
    methods:{
        addStudent(){
            this.myModal = new Modal(document.getElementById('myModal'));
    		this.myModal.show();
        },
        async registerStudent(){
            try {
                const {data} = await axios.post('/register-student',this.studentForm);
                this.loadStudents();
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
        async loadStudents(){
            const {data} = await axios.get('/students');
            this.students = data;
        }
    },
    created(){
        this.loadStudents();
    }
}
</script>
<style scoped>

</style>