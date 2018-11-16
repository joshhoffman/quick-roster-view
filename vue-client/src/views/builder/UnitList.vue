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
    import Unit from '@/components/builder/Unit.vue'
    export default {
        name: "UnitList",
        components: {
            Unit
        },
        data: function() {
            return {
                units: [
                    {name: "test", id: 1},
                    {name: "test2", id: 2}
                ]
            }
        }
    }
</script>

<style scoped>

</style>