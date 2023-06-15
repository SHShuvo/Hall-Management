<template>
<div>
    <div>
        <h5 class="text-danger fw-bold">Dashboaerd</h5>
    </div>
    <div class="row m-5">
        <div class="col-md-5">
            <div class="card py-4 px-5">
                <h5 class="text-center text-danger fw-bold">Seat Information</h5>
                <div class="fw-bold mt-3">All Seats: {{all_seats}}</div>
                <div class="fw-bold mt-2">Allocated Seats: {{alocated_seats}}</div>
                <div class="fw-bold mt-2">Free Seats: {{freeSeat}}</div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="card py-4 px-5">
                <h5 class="text-danger text-center fw-bold">Payment Information</h5>
                <div class="row mt-3">
                    <div class="col-md-5">
                        <label for="">From Date:</label>
                        <input type="text" v-model="from_date" class="form-control form-control-sm" onfocus="(this.type='date')">
                    </div>
                    <div class="col-md-5">
                        <label for="">To Date:</label>
                        <input type="text" v-model="to_date" class="form-control form-control-sm" onfocus="(this.type='date')">
                    </div>
                    <div class="col-md-2">
                        <button @click.prevent="loadPaymentInfo" style="margin-top: 23px" class="btn btn-sm btn-success px-4">Load</button>
                    </div>
                </div>
                <div class="mt-3 fw-bold">
                    Total Payment Amount: {{total_amount}} tk.
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            all_seats:null,
            alocated_seats:null,
            from_date:null,
            to_date:null,
            total_amount:null,
        }
    },
    computed:{
        freeSeat(){
            return Number(this.all_seats) - Number(this.alocated_seats);
        }
    },
    methods:{
        async loadSeatInfo(){
            const {data} = await axios.get('/get-seat-info');
            this.all_seats = data.all_seats;
            this.alocated_seats = data.alocated_seats;
        },
        async loadPaymentInfo(){
            const {data} = await axios.get('/get-payment-info', {
                params:{
                    from_date:this.from_date,
                    to_date:this.to_date
                }
            });
            this.total_amount = data;
        }
    },
    created(){
        let dates = new Date();
        let Year = dates.getFullYear();
        let Month =("0" + (dates.getMonth() + 1)).slice(-2);
        let Day = ("0" + (dates.getDate())).slice(-2);
        this.from_date = Year+'-'+Month+'-'+'01';
        this.to_date = Year+'-'+Month+'-'+Day;

        this.loadSeatInfo();
        this.loadPaymentInfo();
    }
}
</script>
<style scoped>
.card{
    height: 100%;
    box-shadow: 0 0 0 1px rgba(53,72,91,.07), 0 2px 2px rgba(0,0,0,.01), 0 4px 4px rgba(0,0,0,.02), 0 10px 8px rgba(0,0,0,.03), 0 15px 15px rgba(0,0,0,.03), 0 30px 30px rgba(0,0,0,.04), 0 70px 65px rgba(0,0,0,.05);
}
</style>