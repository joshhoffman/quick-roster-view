<template>
    <div>
        hi
    </div>
</template>

<script>
    import {HTTP} from '@/http-common';

    export default {
        name: "Admin",
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

</style>