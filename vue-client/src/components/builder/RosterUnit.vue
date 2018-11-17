<template>
    <div>
        <span class="unitName">{{unitName}}</span>
    </div>
</template>

<script>
    export default {
        name: "RosterUnit",
        props: ['unit'],
        computed: {
            unitName: function() {
                return this.unit.name;
            }
        }
    }
</script>

<style scoped>
    .unitName {
        font-weight: bold;
    }
</style>