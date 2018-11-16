<template>
    <li>
        {{unitName}} &nbsp; <button @click.prevent="addUnit">Add</button>
    </li>
</template>

<script>
    export default {
        name: "Unit",
        props: ['unit'],
        methods: {
            addUnit: function() {
                console.log("add unit", this.unit.name);
            }
        },
        computed: {
            unitName: function() {
                return this.unit.name;
            }
        }
    }
</script>

<style scoped>

</style>