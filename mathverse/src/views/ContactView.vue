<template>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center mt-5">
                <h3 class="text-center">Reach Us</h3>
            </div>
            <div class="row row d-flex justify-content-center mt-2">
                <div class="row d-flex justify-content-center mt-4 custom">
                    <div class="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary w-50 w-md-25">Send</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.custom{
    width: 65rem
}
input, textarea{
    border: 1px solid black;
}
</style>