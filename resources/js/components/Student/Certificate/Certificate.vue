<template>
    <div>
        <div class="d-flex justify-content-between mt-3">
            <h5 class="text-danger fw-bold">Certificate</h5>
        </div>
        <div class="text-center profile-card mt-5">
            <button @click.prevent="pdfDownload" class="btn btn-primary">Download</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        pdfDownload(){
            window.open('/generate-pdf');
        }
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