<template>
    <div>
        <ul>
            <Unit
                    v-for="unit in units"
                    :unit="unit"
                    :key="unit.id">
            </Unit>
        </ul>
    </div>
</template>

<script>
    import Unit from '@/components/builder/Unit.vue';

    export default {
        name: "UnitList",
        props: ["units"],
        methods: {
        },
        components: {
            Unit
        }
    }
</script>

<style scoped>

</style>