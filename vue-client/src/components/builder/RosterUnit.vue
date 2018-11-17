<template>
    <div>
        <hr />
        <span class="unitName">{{unitName}}</span>
        <RosterUnitStats :unit="unit" />
        <table class="table table-bordered table-sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Range</th>
                <th>Type</th>
                <th>Strength</th>
                <th>AP</th>
                <th>D</th>
            </tr>
            </thead>
            <tbody>
                <RosterWeaponStats
                        v-for="weapon in assignedWeapons"
                        :weapon="weapon"
                ></RosterWeaponStats>
            </tbody>
        </table>
    </div>
</template>

<script>
    import RosterUnitStats from './RosterUnitStats'
    import RosterWeaponStats from './RosterWeaponStats'

    export default {
        name: "RosterUnit",
        props: ['unit'],
        components: {RosterWeaponStats, RosterUnitStats},
        computed: {
            unitName: function() {
                return this.unit.name;
            },
            assignedWeapons: function() {
                return this.unit.assignedWeapons;
            }
        }
    }
</script>

<style scoped>
    .unitName {
        font-weight: bold;
    }
</style>