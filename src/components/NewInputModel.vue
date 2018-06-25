<template>
    <div class="form-inline">
        <label class="mr-2 my-1">Custom value: </label>
        <input type="text" class="form-control my-1 mr-sm-2" v-model.number="counter">
    </div>
</template>

<script>
export default {
    computed: {
        counter: {
            get() {
                return this.$store.getters.getCounter;
            },
            set(value) {
                this.$store.dispatch('setCounter', value);
            }
        }
    }    
}
</script>
