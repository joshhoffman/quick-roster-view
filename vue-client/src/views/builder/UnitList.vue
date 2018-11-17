<template>
    <div>
        <ul>
            <Unit
                    v-for="unit in units"
                    :unit="unit"
                    :key="unit.id"
            ></Unit>
        </ul>
    </div>
</template>

<script>
    import Unit from '@/components/builder/Unit.vue';
    import {HTTP} from '@/http-common';

    export default {
        name: "UnitList",
        components: {
            Unit
        },
        data: function() {
            return {
                units: []
            }
        },
        mounted: function() {
            HTTP.get("units")
                .then(result => {
                    console.log(result.data);
                    this.units = result.data;
                })
        }
    }
</script>

<style scoped>

</style>