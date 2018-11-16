<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <UnitList></UnitList>
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
    export default {
        name: "Builder",
        components: {UnitList},
        created: function() {
            console.log("in builder created");
        }
    }
</script>

<style scoped>

</style>