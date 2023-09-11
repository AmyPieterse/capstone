<template>
    <div>
        <div>
            <div id="checkout" class=" d-flex gap-2 p-2">
                <div class="container-md col-md-8 w-md-75" id="cartProducts">
                    <div class="col-md-12 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span><h3>Your Cart</h3></span>
                            <span id="count" class="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3" id="cartDisplayProducts">
                        
                        </ul>
                    </div>
                </div>
                <div class="container-md col-md-4 w-md-25 m-1" id="summaryPricing">
                    <h3 class="m-3">Order Summary</h3>
                    <div id="content" class="d-flex flex-column gap-2">
    
                    <div class="d-flex flex-row justify-content-between">
                        <label for="checkoutSubtotal">Subtotal:</label>
                        <span id="checkoutSubtotal">$5</span>
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                        <label for="checkoutDelivery">Delivery & Handling:</label>
                        <span id="checkoutDelivery">$5</span>
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                        <label for="checkoutTaxes">Taxes:</label>
                        <span id="checkoutTaxes">$5</span>
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                        <label class="fw-bold" for="Total">Total</label>
                        <span id="Total">$5</span>
                    </div>
                    <div><button id="proceed">Proceed To Checkout</button></div>
                    <div>
    
                    </div>
                    <div>
    
                    </div>
                </div>
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

</style>