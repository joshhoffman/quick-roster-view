<template>
    <div>
        {{weapon.name}} &nbsp; <button @click="onRemove">Remove</button>
    </div>
</template>

<script>
    export default {
        name: "WeaponItem",
        props: ['unit', 'weapon'],
        methods: {
            onRemove: function() {
                const _this = this;
                this.unit.assignedWeapons = this._.filter(this.unit.assignedWeapons, function(o) { return o.key !== _this.weapon.key })
            }
        }
    }
</script>

<style scoped>

</style>