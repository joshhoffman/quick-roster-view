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
                this.$store.commit("addUnit", this.unit);
            }
        },
        computed: {
            unitName: function() {
                return this.unit.name;
            }
        },
        created: function() {
        }
    }
</script>

<style scoped>

</style>