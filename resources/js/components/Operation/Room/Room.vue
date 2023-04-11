<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h6 class="text-danger fw-bold">Rooms</h6>
            <button @click.prevent="addRoom" class="btn btn-sm btn-primary">Add Room</button>
        </div>
        <div class="row">
            <div class="col-md-3">
                <input type="text" v-model="search" class="form-control form-control-sm" placeholder="Search Room No">
            </div>
        </div>
        <div class="mt-1">
            <table class="table table-sm table-bordered">
                <thead>
                    <tr class="table-danger">
                        <th>SN.</th>
                        <th>Room Number</th>
                        <th class="text-center">Seats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rm, index) in filteredRooms" :key="'rm'+index">
                        <td>{{index+1}}</td>
                        <td>{{rm.room_number}}</td>
                        <td>
                            <table class="table table-sm table-bordered seat-table">
                                <thead>
                                    <tr class="table-secondary">
                                        <th>Seat Number</th>
                                        <th>Attached Student</th>
                                        <th>Attached Date</th>
                                        <th class="text-center" style="width: 140px">Allocate Seat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(st, st_indx) in rm.seats" :key="'st_indx'+st_indx">
                                        <td>{{st.seat_number}}</td>
                                        <td>{{st.student?(st.student.name+'-'+st.student.roll):''}}</td>
                                        <td>{{st.student?st.allocated_date:''}}</td>
                                        <td class="text-center">
                                            <button @click.prevent="allocateEdit(rm, st)" class="btn btn-sm btn-outline-primary"><i class="fas fa-cog" aria-hidden="true"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="modal fade" id="myModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add room</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <form>
                                <div class="form-group">
                                    <label>Room number</label>
                                    <input type="text" v-model="roomForm.room_number" placeholder="Room number" class="form-control form-control-sm" required>
                                    <span class="text-danger" v-if="errors['room_number']">{{errors['room_number'][0]}}</span>
                                </div>
                                <div class="form-group mt-3">
                                    <label>Number of seats in the room</label>
                                    <input type="text" v-model="roomForm.number_of_seats" placeholder="Number of seats" class="form-control form-control-sm" required>
                                    <span class="text-danger" v-if="errors['number_of_seats']">{{errors['number_of_seats'][0]}}</span>
                                </div>
                                <button @click.prevent="saveRoom" class="btn btn-sm w-100 btn-primary mt-3">Register</button>
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
        <div class="modal fade" id="alModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Allocate Seat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Room number</label>
                                <input type="text" v-model="allocationForm.room_number" :disabled="true" placeholder="Room number" class="form-control form-control-sm" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Seat number</label>
                                <input type="text" v-model="allocationForm.seat_number" :disabled="true" placeholder="Seat number" class="form-control form-control-sm" required>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label>Student for allocation</label>
                            <v-select class="v-select-sm" :selectOnTab="true" :clearable="true" 
                                v-model="allocationForm.student_id" :reduce="el=>el.id"
                                :options="students" placeholder="Select student" label="name_roll">
                            </v-select>
                            <span class="text-danger" v-if="errors['student_id']">{{errors['student_id'][0]}}</span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label>Date of allocation</label>
                            <input type="date" v-model="allocationForm.allocated_date" class="form-control form-control-sm">
                            <span class="text-danger" v-if="errors['allocated_date']">{{errors['allocated_date'][0]}}</span>
                        </div>
                    </div>
                    <button @click.prevent="updateAllocation" class="btn btn-sm w-100 btn-primary mt-3">Update</button>    
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
            alModal:{},
            roomForm:{
                room_number:null,
                number_of_seats:null,
            },
            allocationForm:{
                room_number:null,
                seat_number:null,
                seat_id:null,
                student_id:null,
                allocated_date:null,
            },
            search:'',
            rooms:[],
            students:[],
            errors:[],
        }
    },
    computed:{
        filteredRooms(){
            if(!this.search) return this.rooms;
            let keyword = this.search.toLowerCase();
            return this.rooms.filter(el=>{
                return el.room_number.toString().toLowerCase().includes(keyword);
            })
        }
    },
    methods:{
        allocateEdit(room, seat){
            this.allocationForm.room_number = room.room_number;
            this.allocationForm.seat_number = seat.seat_number;
            this.allocationForm.seat_id = seat.id;
            this.allocationForm.allocated_date = seat.allocated_date;
            this.allocationForm.student_id = seat.allocated_user;

            this.alModal = new Modal(document.getElementById('alModal'));
    		this.alModal.show();
        },
        async updateAllocation(){
            this.errors = [];
            try {
                const {data} = await axios.post('/update-allocation', this.allocationForm);
                console.log(data);
    		    this.alModal.hide();
                this.allocationForm = {
                    room_number:null,
                    seat_number:null,
                    seat_id:null,
                    student_id:null,
                    allocated_date:null,
                };
                toast.fire({
					icon: 'success',
					title: 'Successfully Updated'
				});
            } 
            catch (error) {
                console.log(error);
                if(error.response.status == 422){
                    this.errors = error.response.data.errors;
                }
				toast.fire({
					icon: 'error',
					title: 'Try again'
				});
            }
        },
        addRoom(){
            this.myModal = new Modal(document.getElementById('myModal'));
    		this.myModal.show();
        },
        async saveRoom(){
            this.errors = [];
            try {
                const {data} = await axios.post('/register-room',this.roomForm);
    		    this.myModal.hide();
                this.roomForm={
                    room_number:null,
                    number_of_seats:null,
                };
				toast.fire({
					icon: 'success',
					title: 'Successfully Registered'
				});
			} 
			catch (error) {
                if(error.response.status == 422){
                    this.errors = error.response.data.errors;
                }
				toast.fire({
					icon: 'error',
					title: 'Try again'
				});
			}
        },
        async loadRooms(){
            try {
                const {data} = await axios.get('/get-rooms');
                this.rooms = data;
            } 
            catch (error) {
                
            }
        },
        async loadStudents(){
            const {data} = await axios.get('/students-room-allocation');
            this.students = data;
        },
        allocateModal(){

        }
    },
    created(){
        this.loadRooms();
        this.loadStudents();
    }
}
</script>
<style scoped>
    .seat-table{
        font-size: 13px !important;
        margin-bottom: .5rem !important;
    }
    .seat-table th, .seat-table td{
        padding: .15rem .25rem !important;
        color: #4f4f4f !important;
        font-style: italic !important;
    }
    .seat-table .btn-sm{
        padding: 0.1rem 0.5rem !important;
        font-size: 0.75rem !important;
    }
</style>