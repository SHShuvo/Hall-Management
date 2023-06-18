<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h5 class="text-danger fw-bold">Migration</h5>
        </div>
        <div v-if="!loading" class="mt-4">
            <div v-if="isEligible || isCanceled">
                <div class="card p-4">
                    <div class="row">
                        <div class="col-md-4">
                            <div>
                                <span class="fw-bold">Name:</span> {{allocationInfo.name}}
                            </div>
                            <div>
                                <span class="fw-bold">Roll:</span> {{allocationInfo.roll}}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <span class="fw-bold">Present Room No:</span> {{allocationInfo.room_number}}
                            </div>
                            <div>
                                <span class="fw-bold">Present Seat No:</span> {{allocationInfo.seat_number}}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <span class="fw-bold">Allocated Date:</span> {{allocationInfo.student_details.allocated_date}}
                            </div>
                            <div>
                                <span class="fw-bold">Canceled Date:</span> {{allocationInfo.student_details.cancelled_date}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h4 class="text-center text-danger">
                    You're not attached to any room
                </h4>
            </div>
        </div>
        <hr class="mt-5">
        <div v-if="isEligible">
            <div class="row p-3">
                <div class="col-md-3">
                    <label>Select Available Room</label>
                     <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                        v-model="migrationForm.room"
                        :options="availableRooms" placeholder="Select room" label="room_number">
                    </v-select>
                </div>
                <div class="col-md-3">
                    <label>Select Available Seat</label>
                     <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                        v-model="migrationForm.seat"
                        :options="availableSeats" placeholder="Select seat" label="seat_number">
                    </v-select>
                </div>
                <div class="col-md-3">
                    <label>Select Date</label>
                     <input type="date" class="form-control form-control-sm" v-model="migrationForm.date">
                </div>
                <div class="col-md-3">
                    <button @click="executeMigration" class="btn btn-sm btn-primary px-3" style="margin-top: 22px;">Migrate</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            allocationInfo:{},
            availableRooms:[],
            migrationForm:{
                room:null,
                seat:null,
                date:null,
            },
            loading:false,
        }
    },
    computed:{
        isEligible(){
            return !!(this.allocationInfo.student_details && this.allocationInfo.student_details.allocated_date && !(this.allocationInfo.student_details.cancelled_date));
        },
        isCanceled(){
            return !!(this.allocationInfo.student_details && this.allocationInfo.student_details.allocated_date && this.allocationInfo.student_details.cancelled_date);
        },
        availableSeats(){
            if(this.migrationForm.room){
                return this.migrationForm.room.seats;
            }
            return [];
        }
    },
    methods:{
        async executeMigration(){
            try {
                const {data} = axios.post('/submit-migration', {
                    seat: this.migrationForm.seat,
                    date: this.migrationForm.date,
                    student_id: this.allocationInfo
                });
                this.migrationForm.seat = null;
                this.migrationForm.room = null;
                toast.fire({
                    icon: 'success',
                    title: 'Migrated Successfully'
                });
            } 
            catch (error) {
                
            }
        },
        async studentAllocation(){
            this.loading = true;
            try {
                const {data} = await axios.get('/migration-info');
                this.allocationInfo = data;
                this.allocationInfo.room_number = data.seat?.room?.room_number;
                this.allocationInfo.seat_number = data.seat?.seat_number;
            } 
            catch (error) {
                
            }
            finally{
                this.loading = false;
            }
        },
        async loadAvailableSeats(){
            try {
                const {data} = await axios.get('/available-rooms-migration');
                this.availableRooms = data;
            } 
            catch (error) {
                
            }
        }
    },
    created(){
        let dates = new Date();
        let Year = dates.getFullYear();
        let Month =("0" + (dates.getMonth() + 1)).slice(-2);
        let Day = ("0" + (dates.getDate())).slice(-2);
        this.migrationForm.date = this.fr = Year+'-'+Month+'-'+Day;
        this.studentAllocation();
        this.loadAvailableSeats();
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