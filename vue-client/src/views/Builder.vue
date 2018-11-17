<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <UnitList :units="units"/>
            </div>
            <div class="col-md-6">
                test
            <!--<RosterDisplay addWeaponHandler={this.addWeaponToUnit} removeWeaponHandler={this.removeWeaponFromUnit} removeUnitHandler={this.removeUnitFromList} units={this.state.selectedUnits} weapons={this.state.weapons} />-->
            </div>
        </div>
        <div className="row">
            <div class="col-md-12" id="section-to-print">
                <!--<StatDisplay units={this.state.selectedUnits} weapons={this.state.weapons} />-->
                <RosterList />
            </div>
        </div>
    </div>
</template>

<script>
    import UnitList from "./builder/UnitList";
    import RosterList from "./builder/RosterList"
    import {HTTP} from '@/http-common';

    export default {
        name: "Builder",
        components: {RosterList, UnitList},
        data: function() {
            return {
                units: [],
                weapons: []
            }
        },
        created: function() {
        },
        methods: {
        },
        mounted: function() {
            HTTP.get("units")
                .then(result => {
                    this.units = result.data;
                });

            HTTP.get("weapons")
                .then(result => {
                    this.weapons = result.data;
                });
        },
        computed: {
            roster: function() {
                return this.$store.state.roster;
            }
        }
    }
</script>

<style scoped>

</style>