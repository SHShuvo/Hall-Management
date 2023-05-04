<template>
    <div>
        <div class="d-flex justify-content-between">
            <h5 class="text-danger fw-bold">Payment</h5>
            <button @click="makePayment = !makePayment" class="btn btn-sm btn-primary">
                <span v-if="makePayment"><i class="fas fa-minus-circle me-1"></i> Hide</span>
                <span v-else><i class="fas fa-plus-circle me-1"></i> Add Payment</span>
            </button>
        </div>
        <div v-if="makePayment" class="payment-form mt-3">
            <div class="row">
                <div class="col-md-4">
                    <label class="mb-1">Student for allocation</label>
                    <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                        v-model="paymentForm.student_id" :reduce="el=>el.id"
                        :options="students" placeholder="Select student" label="name_roll">
                    </v-select>
                    <span class="text-danger" v-if="errors['student_id']">{{errors['student_id'][0]}}</span>
                </div>
                <div class="col-md-4">
                    <label class="mb-1">Payment Amount(Tk.)</label>
                    <input type="number" class="form-control form-control-sm text-end" placeholder="Amount" v-model="paymentForm.amount">
                    <span class="text-danger" v-if="errors['amount']">{{errors['amount'][0]}}</span>
                </div>
                <div class="col-md-4">
                    <label class="mb-1">Payment Date</label>
                    <input type="date" v-model="paymentForm.date" class="form-control form-control-sm">
                    <span class="text-danger" v-if="errors['date']">{{errors['date'][0]}}</span>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button @click="submitPayment" class="btn btn-sm btn-success px-4">Save</button>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-12">
                <table class="table table-sm table-bordered tableFixHead">
                    <thead>
                        <tr class="table-danger">
                            <th>SN.</th>
                            <th>Student Name</th>
                            <th>Student Roll</th>
                            <th>Payment Amount(Tk.)</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pay, index) in payments" :key="'pay'+index">
                            <td>{{index+1}}</td>
                            <td>{{pay.name}}</td>
                            <td>{{pay.roll}}</td>
                            <td class="text-end">{{pay.amount}}</td>
                            <td>{{pay.date}}</td>
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
            paymentForm:{
                student_id:null,
                amount:null,
                date:null,
            },
            makePayment:true,
            students:[],
            payments:[],
            errors:[],
        }
    },
    computed:{
        
    },
    methods:{
        async loadStudents(){
            const {data} = await axios.get('/students-room-allocation');
            this.students = data;
        },
        async loadPayments(){
            const {data} = await axios.get('/get-payments');
            this.payments = data.map(el=>{
                el.name = el.user?.name;
                el.roll = el.user?.roll;
                delete el.user;
                return el;
            });
        },
        async submitPayment(){
            this.errors = [];
            try {
                const {data} = await axios.post('/payment', this.paymentForm);
                this.loadPayments();
                this.paymentForm.student_id = null;
                this.paymentForm.amount = null;
                toast.fire({
					icon: 'success',
					title: 'Payment Successfully'
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
        }
    },
    created(){
        let dates = new Date();
        let Year = dates.getFullYear();
        let Month =("0" + (dates.getMonth() + 1)).slice(-2);
        let Day = ("0" + (dates.getDate())).slice(-2);
        this.paymentForm.date = Year+'-'+Month+'-01';
        this.to_date = this.from_date = Year+'-'+Month+'-'+Day;
        this.loadStudents();
        this.loadPayments();
    }
}
</script>
<style scoped>
.payment-form{
    padding: 1.25rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    background-color: rgba(0,0,0,.03);
}
</style>