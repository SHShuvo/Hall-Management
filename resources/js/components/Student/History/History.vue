<template>
    <div>
        <div class="card p-3">
            <div class="row">
                <div class="col-md-3">
                    <div class="card flex-row p-2"> <span class="fw-bold">Hall Attached Date: &nbsp;</span>{{chargeInfo.student_details.allocated_date}} </div>
                </div>
                <div class="col-md-3">
                    <div class="card flex-row p-2"> <span class="fw-bold">Total Charge(Tk.): &nbsp;</span>{{chargeInfo.student_details.charge}} </div>
                </div>
                <div class="col-md-3">
                    <div class="card flex-row p-2"> <span class="fw-bold">Total Paid(Tk.): &nbsp;</span>{{chargeInfo.payments_sum_amount}} </div>
                </div>
                <div class="col-md-3">
                    <div class="card flex-row p-2"> <span class="fw-bold">Total Due(Tk.): &nbsp;</span>{{dueAmount}} </div>
                </div>
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
                            <th>Payment Date</th>
                            <th>Payment Amount(Tk.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pay, index) in payments" :key="'pay'+index">
                            <td>{{index+1}}</td>
                            <td>{{pay.name}}</td>
                            <td>{{pay.roll}}</td>
                            <td>{{pay.date}}</td>
                            <td class="text-end">{{pay.amount}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="table-danger">
                            <th colspan="4">Total</th>
                            <th class="text-end">{{totalPayment}}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            payments:[],
            chargeInfo:{
                student_details:{}
            },
        }
    },
    computed:{
        totalPayment(){
            return this.payments.reduce((pre, cur)=>{
                return pre + Number(cur.amount);
            },0);
        },
        dueAmount(){
            return (Number(this.chargeInfo.student_details.charge) - Number(this.chargeInfo.payments_sum_amount)).toFixed(2);
        }
    },
    methods:{
        async loadChargeInfo(){
            const {data} = await axios.get('/charge-info');
            this.chargeInfo = data;
        },
        async loadPayments(){
            const {data} = await axios.get('/get-payments-studentwise');
            this.payments = data.map(el=>{
                el.name = el.user?.name;
                el.roll = el.user?.roll;
                delete el.user;
                return el;
            });
        },
    },
    created(){
        this.loadChargeInfo();
        this.loadPayments();
    }
}
</script>
<style scoped>

</style>