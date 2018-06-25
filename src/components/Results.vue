<template>
    <div>
        <p>Counter Results: {{ doubleVal }}</p> 
        <p>Clicked: {{ clicked }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        clicked() {
            return this.$store.getters['counterNamespaced/getCounter'];
        },
        doubleVal(){
            return this.$store.getters['counterNamespaced/doubleVal'];
        },
    }
}
</script>
