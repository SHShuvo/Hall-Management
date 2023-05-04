<template>
    <div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div v-if="student_info" class="profile-card">
                    <div class="d-flex justify-content-between mb-4">
                        <h2>Student Profile</h2>
                        <div class="d-flex">
                            <button @click.prevent="editUser" class="btn btn-secondary me-1"><i class="fas fa-edit"></i></button>
                            <button @click.prevent="editPassword" class="btn btn-primary">Change Password</button>
                        </div>
                    </div>
                    <p><strong>Name:</strong>&nbsp;{{student_info.name}}</p>
                    <p><strong>Roll:</strong>&nbsp;{{student_info.roll}}</p>
                    <p><strong>Department:</strong>&nbsp;{{student_info.department}}</p>
                    <p><strong>Email:</strong>&nbsp;{{student_info.email}}</p>
                    <p><strong>Session:</strong>&nbsp; {{student_info.session}}</p>
                    <p><strong>Phone:</strong>&nbsp; {{student_info.phone}}</p>
                </div>
            </div>
            <div class="col-md-2">
            </div>
        </div>
        <div class="modal fade" id="passwordModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Change Password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class="col-sm-4" style="font-weight:normal"> Old Password</label>
                        <div class="col-sm-7 mr-1">
                            <input type="password" v-model="passForm.old_password" class="form-control form-control-sm" placeholder="Enter Old Password">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">New password</label>
                        <div class="col-sm-7 mr-1">
                            <input v-on:blur="strengthCheck" type="password" v-model="passForm.new_password" class="form-control form-control-sm" placeholder="Enter New Password">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">Confirm new password</label>
                        <div class="col-sm-7 mr-1">
                            <input type="password" v-model="passForm.new_password_confirmation" class="form-control form-control-sm" placeholder="Re-type new password">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <div class="offset-sm-4 col-sm-7">
                            <button @click.prevent="passUpdate" class="btn btn-sm btn-info btn-block w-100">Submit</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="userModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Update Info</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group row">
                        <label class="col-sm-4" style="font-weight:normal">Name</label>
                        <div class="col-sm-7 mr-1">
                            <input type="text" v-model="userForm.name" class="form-control form-control-sm" placeholder="Name">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">Department</label>
                        <div class="col-sm-7 mr-1">
                            <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                                v-model="userForm.department" :reduce="el=>el.code"
                                :options="departments" placeholder="Select Department" label="name">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">Email</label>
                        <div class="col-sm-7 mr-1">
                            <input type="text" v-model="userForm.email" class="form-control form-control-sm" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">Session</label>
                        <div class="col-sm-7 mr-1">
                            <input type="text" v-model="userForm.session" class="form-control form-control-sm" placeholder="Session">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <label class="col-sm-4" style="font-weight:normal">Phone</label>
                        <div class="col-sm-7 mr-1">
                            <input type="text" v-model="userForm.phone" class="form-control form-control-sm" placeholder="Phone">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <div class="offset-sm-4 col-sm-7">
                            <button @click.prevent="userUpdate" class="btn btn-sm btn-info btn-block w-100">Submit</button>
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
            passwordModal:{},
            userModal:{},
            student_info:null,
            passForm:{
                old_password:'',
                new_password:'',
                new_password_confirmation:'',
            },
            userForm:{
                name:'',
                department:null,
                email:null,
                session:null,
                phone:null,
            },
            departments:[],
        }
    },
    methods:{
        async loadProfile(){
            const {data} = await axios.get('/profile-info');
            this.student_info = data;
            this.student_info.session = data.student_details?.session;
            this.student_info.department = data.student_details?.department_detail?.name;
            this.student_info.department_code = data.student_details?.department_detail?.code;
        },
        editPassword(){
            this.passwordModal = new Modal(document.getElementById('passwordModal'));
    		this.passwordModal.show();
        },
        editUser(){
            this.userForm.name = this.student_info.name;
            this.userForm.department = this.student_info.department_code;
            this.userForm.email = this.student_info.email;
            this.userForm.session = this.student_info.session;
            this.userForm.phone = this.student_info.phone;

            this.userModal = new Modal(document.getElementById('userModal'));
    		this.userModal.show();
        },
        strengthCheck(){
            if(this.passForm.new_password.length<4){
                const sound=new Audio('/audios/error.mp3');
                sound.play();
                toast.fire({
                    icon: 'warning',
                    title: 'Password Should Be At Least 4 Characters'
                })
            }
        },
        async userUpdate(){
            try{
                let data= await axios.post('/student-update', this.userForm);
                if(data.status==200){
                    toast.fire({
                        icon:'success',
                        title: 'Updated Successfully'
                    });
                    this.loadProfile();
    		        this.userModal.hide();
                    this.userForm={
                        name:'',
                        department:null,
                        email:null,
                        session:null,
                        phone:null,
                    }
                }
            }
            catch(error){
                toast.fire({
                    icon: 'warning',
                    title: "Something went wrong"
                })
            }
        },
        async passUpdate(){
            if(!this.passForm.old_password || !this.passForm.new_password){
                toast.fire({
                    icon: 'warning',
                    title: 'Please Fill Up Old And New Password'
                });
                return;
            }
            if(this.passForm.new_password !== this.passForm.new_password_confirmation){
                toast.fire({
                    icon: 'warning',
                    title: ' New password and Confirm password does not match'
                });
                return;
            }
            try{
                let data= await axios.post('/password-update', this.passForm);
                if(data.status==200){
                    toast.fire({
                        icon:'success',
                        title: 'Password Updated Successfully'
                    });
    		        this.passwordModal.hide();
                    this.passForm={
                        old_password:'',
                        new_password:'',
                        new_password_confirmation:'',
                    }
                }
            }
            catch(error){
                toast.fire({
                    icon: 'warning',
                    title: "Old Password does not match"
                })
            }
        },
        async loadDepartments(){
            const {data} = await axios.get('/all-department');
            this.departments = data;
        }
    },
    created(){
        this.loadProfile();
        this.loadDepartments();
    }
}
</script>
<style scoped>
.profile-card {
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.password-card{
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-card h2 {
    font-size: 28px;
    margin-bottom: 0px;
}

.profile-card p {
    font-size: 18px;
    margin-bottom: 10px;
}
</style>