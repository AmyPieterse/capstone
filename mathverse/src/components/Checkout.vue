<template>
<div>   
    <div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="CheckoutLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="checkoutModal">Checkout</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary" @click="processOrder">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        methods:{
            processOrder(){
                this.$store.dispatch('completeOrder')
            },
        }
    }
</script>

<style scoped>

</style>