<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <UnitList :units="units"></UnitList>
            </div>
            <div class="col-md-6">
                test
            <!--<RosterDisplay addWeaponHandler={this.addWeaponToUnit} removeWeaponHandler={this.removeWeaponFromUnit} removeUnitHandler={this.removeUnitFromList} units={this.state.selectedUnits} weapons={this.state.weapons} />-->
            </div>
        </div>
        <!--<div className="row">-->
            <!--<div class="col-md-12" id="section-to-print">-->
                <!--<StatDisplay units={this.state.selectedUnits} weapons={this.state.weapons} />-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import UnitList from "./builder/UnitList";
    import {HTTP} from '@/http-common';

    export default {
        name: "Builder",
        components: {UnitList},
        data: function() {
            return {
                units: [],
                weapons: []
            }
        },
        created: function() {
            console.log("in builder created");
        },
        mounted: function() {
            HTTP.get("units")
                .then(result => {
                    console.log(result.data);
                    this.units = result.data;
                });

            HTTP.get("weapons")
                .then(result => {
                    console.log(result.data);
                    this.weapons = result.data;
                });
        }
    }
</script>

<style scoped>

</style>