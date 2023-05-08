<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h5 class="text-danger fw-bold">Hall Clearance Certificate</h5>
        </div>
        <div class="mt-2 card p-3">
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
        <div class="text-center profile-card mt-5">
            <button @click.prevent="pdfDownload" class="btn btn-primary">Download Certificate</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chargeInfo:{
                student_details:{}
            },
        }
    },
    computed:{
        dueAmount(){
            return (Number(this.chargeInfo.student_details.charge) - Number(this.chargeInfo.payments_sum_amount)).toFixed(2);
        }
    },
    methods:{
        pdfDownload(){
            window.open('/generate-pdf');
        },
        async loadChargeInfo(){
            const {data} = await axios.get('/charge-info');
            this.chargeInfo = data;
        },
    },
    created(){
        this.loadChargeInfo();
    }
}
</script>
<style scoped>
.profile-card {
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>