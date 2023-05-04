<template>
<div>
    <div class="d-flex justify-content-between mt-3">
        <h5 class="text-danger fw-bold">Students</h5>
        <button @click.prevent="addStudent" class="btn btn-sm btn-primary">Add Student</button>
    </div>
    <div class="row">
        <div class="col-md-3">
            <input type="text" v-model="search" class="form-control form-control-sm" placeholder="Search Roll / Department">
        </div>
    </div>
    <div class="mt-1">
        <table class="table table-sm table-bordered">
            <thead>
                <tr class="table-danger">
                    <th>SN.</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Department</th>
                    <th>Session</th>
                    <th>Allocated Date</th>
                    <th>Cancelled Date</th>
                    <th>Total Charge</th>
                    <th>Paid</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stu, index) in filteredStudents" :key="'stu'+index">
                    <td>{{index+1}}</td>
                    <td>{{stu.name}}</td>
                    <td>{{stu.roll}}</td>
                    <td>{{stu.department}}</td>
                    <td>{{stu.session}}</td>
                    <td>{{stu.allocated_date}}</td>
                    <td>{{stu.cancelled_date}}</td>
                    <td class="text-end">{{stu.total_charge}}</td>
                    <td class="text-end">{{stu.payments_sum_amount}}</td>
                    <td>{{stu.phone}}</td>
                    <td>{{stu.email}}</td>
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
                                <span class="text-danger" v-if="errors['name']">{{errors['name'][0]}}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label>Roll</label>
                                <input type="text" v-model="studentForm.roll" placeholder="Roll" class="form-control form-control-sm" required>
                                <span class="text-danger" v-if="errors['roll']">{{errors['roll'][0]}}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label>Session</label>
                                <input type="text" v-model="studentForm.session" class="form-control form-control-sm" placeholder="Session">
                                <span class="text-danger" v-if="errors['session']">{{errors['session'][0]}}</span>
                            </div>
                            <div class="form-group row mt-3">
                                <label>Department</label>
                                <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                                    v-model="studentForm.department" :reduce="el=>el.code"
                                    :options="departments" placeholder="Select Department" label="name">
                                </v-select>
                                <span class="text-danger" v-if="errors['department']">{{errors['department'][0]}}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label>Phone</label>
                                <input type="text" v-model="studentForm.phone" class="form-control form-control-sm" placeholder="Phone">
                                <span class="text-danger" v-if="errors['phone']">{{errors['phone'][0]}}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label for="email">Email(Optional)</label>
                                <input type="email" v-model="studentForm.email" placeholder="Email" class="form-control form-control-sm" required>
                                <span class="text-danger" v-if="errors['email']">{{errors['email'][0]}}</span>
                            </div>
                            <div class="form-group mt-3">
                                <label for="password">Temporary Password</label>
                                <input type="text" v-model="studentForm.password" class="form-control form-control-sm" id="password" placeholder="Password" required>
                                <span class="text-danger" v-if="errors['password']">{{errors['password'][0]}}</span>
                            </div>
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
                department:'',
                email:'',
                session:'',
                phone:'',
                password:'1234',
            },
            search:'',
            students:[],
            departments:[],
            errors:[],
        }
    },
    computed:{
        filteredStudents(){
            if(!this.search) return this.students;
            let keyword = this.search.toLowerCase();
            return this.students.filter(el=>{
                return el.roll.toString().toLowerCase().includes(keyword) 
                || el.department.toString().toLowerCase().includes(keyword);
            })
        }
    },
    methods:{
        addStudent(){
            this.myModal = new Modal(document.getElementById('myModal'));
    		this.myModal.show();
        },
        async registerStudent(){
            this.errors = [];
            try {
                const {data} = await axios.post('/register-student',this.studentForm);
                this.studentForm = {
                    name:'',
                    roll:'',
                    department:'',
                    email:'',
                    session:'',
                    phone:'',
                    password:'1234',
                };
                this.loadStudents();
    		    this.myModal.hide();
				toast.fire({
					icon: 'success',
					title: 'Successfully Registered'
				});
			} 
			catch (error) {
                if(error.response?.status == 422){
                    this.errors = error.response.data.errors;
                }
				toast.fire({
					icon: 'error',
					title: 'Try again'
				});
			}
        },
        async loadStudents(){
            const {data} = await axios.get('/students');
            this.students = data.map(el=>{
                el.department = el.student_details?.department_detail?.name;
                el.session = el.student_details?.session;
                el.allocated_date = el.student_details?.allocated_date;
                el.cancelled_date = el.student_details?.cancelled_date;
                el.total_charge = el.student_details?.charge;
                delete el.student_details;
                return el;
            });
        },
        async loadDepartments(){
            const {data} = await axios.get('/all-department');
            this.departments = data;
        }
    },
    created(){
        this.loadStudents();
        this.loadDepartments();
    }
}
</script>
<style scoped>

</style>