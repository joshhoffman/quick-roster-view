<template>
    <div>
        <RosterUnit
                v-for="unit in roster"
                :unit="unit"
                :key="unit.key">
        </RosterUnit>
    </div>
</template>

<script>
    import RosterUnit from '@/components/builder/RosterUnit'

    export default {
        name: "RosterList",
        components: {RosterUnit},
        computed: {
            roster: function() {
                return this.$store.state.roster;
            }
        }
    }
</script>

<style scoped>

</style>