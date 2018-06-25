<template>
    <div>
        <button class="btn btn-primary" @click="addCounter()">Add</button>&nbsp;
        <button class="btn btn-primary" @click="subCounter()">Substract</button>
        <br><br>
        <button class="btn btn-primary" @click="addCounterLater({val: 10, time: 1000})">Add 10 later</button>&nbsp;
        <button class="btn btn-primary" @click="subCounterLater({val: 10, time: 1000})">Subtract 10 later</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    methods: {
        addCounter(payLoad) {
            this.$store.commit('increment', payLoad);
        },
        subCounter(payLoad) {
            this.$store.commit('decrement', payLoad);
        },
        ...mapActions({
            addCounterLater: 'incLater',
            subCounterLater: 'subLater',
        }),
    }
}
</script>

