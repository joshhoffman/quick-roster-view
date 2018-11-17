<template>
    <div>
        <WeaponOptionUnit
                v-for="unit in roster"
                :unit="unit"
        ></WeaponOptionUnit>
    </div>
</template>

<script>
    import WeaponOptionUnit from '@/components/builder/WeaponOptionUnit'

    export default {
        name: "WeaponOptionsList",
        components: {WeaponOptionUnit},
        computed: {
            roster: function() {
                return this.$store.state.roster;
            },
            weapons: function() {
                return this.$store.state.weapons;
            }
        }
    }
</script>

<style scoped>

</style>