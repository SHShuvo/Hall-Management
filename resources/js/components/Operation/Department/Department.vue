<template> 
    <div class="mt-3">
        <div class="d-flex justify-content-between">
            <h5 class="text-danger fw-bold">Departments</h5>
            <button @click="addDeparment = !addDeparment" class="btn btn-sm btn-primary">
                <span v-if="addDeparment">Hide</span>
                <span v-else>Add Department</span>
            </button>
        </div>
        <div class="add-card mt-3" v-if="addDeparment">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-5">
                    <input type="text" v-model="deptForm.name" class="form-control form-control-sm" placeholder="Deparment Name">
                </div>
                <div class="col-md-2">
                    <input type="number" v-model="deptForm.code" class="form-control form-control-sm" placeholder="Deparment Code">
                </div>
                <div class="col-md-2">
                    <button @click.prevent="storeDeparment" class="btn btn-sm btn-success px-3">Save</button>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table class="table table-sm table-bordered tableFixHead">
                    <thead>
                        <tr class="table-danger">
                            <th>SN.</th>
                            <th>Department Name</th>
                            <th>Department Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dept, index) in departments" :key="'dept'+index">
                            <td>{{index+1}}</td>
                            <td>{{dept.name}}</td>
                            <td>{{dept.code}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            departments:[],
            addDeparment:false,
            deptForm:{
                name:'',
                code:''
            }
        }
    },
    methods:{
        async storeDeparment(){
            try {
                const {data} = await axios.post('/store-department', this.deptForm);
                this.addDeparment = false;
                this.departments.push(data.dept);
                this.deptForm = {
                    name:'',
                    code:''
                };
                toast.fire({
					icon: 'success',
					title: 'Canceled Successfully'
				});
            } 
            catch (error) {
                toast.fire({
					icon: 'error',
					title: 'Try again'
				});
            }
        },
        async loadDepartments(){
            try {
                const {data} = await axios.get('/all-department');
                this.departments = data;
            } 
            catch (error) {
                
            }
        }
    },
    created(){
        this.loadDepartments();
    }
}
</script>
<style scoped>
.add-card{
    background-color: rgba(0,0,0,.03);
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    padding: 20px;
}
</style>