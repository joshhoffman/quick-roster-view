<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <UnitList/>
            </div>
            <div class="col-md-6">
                <WeaponOptionsList />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" id="section-to-print">
                <RosterList />
            </div>
        </div>
    </div>
</template>

<script>
    import UnitList from "./builder/UnitList";
    import RosterList from "./builder/RosterList";
    import WeaponOptionsList from "./builder/WeaponOptionsList";
    import {HTTP} from '@/http-common';

    export default {
        name: "Builder",
        components: {WeaponOptionsList, RosterList, UnitList},
        data: function() {
            return {
            }
        },
        created: function() {
        },
        methods: {
        },
        mounted: function() {
            HTTP.get("units")
                .then(result => {
                    this.$store.commit("setUnits", result.data);
                });

            HTTP.get("weapons")
                .then(result => {
                    this.$store.commit("setWeapons", result.data)
                });
        },
        computed: {
            roster: function() {
                return this.$store.state.roster;
            },
            units: function() {
                return this.$store.state.units;
            }
        }
    }
</script>

<style scoped>
    @media print {
        body * {
            visibility: hidden;
        }
        #section-to-print, #section-to-print * {
            visibility: visible;
        }
        #section-to-print {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
</style>