<template>
    <div>
        {{unitName}}
        <br />
        <WeaponSelect :unit="unit" />
        <ul>
            <li v-for="weapon in unit.assignedWeapons">
                <WeaponItem
                        :key="weapon.key"
                        :unit="unit"
                        :weapon="weapon"
                ></WeaponItem>
            </li>
        </ul>
    </div>
</template>

<script>
    import WeaponSelect from './WeaponSelect'
    import WeaponItem from './WeaponItem'

    export default {
        name: "WeaponOptionUnit",
        props: ["unit"],
        components: {WeaponSelect, WeaponItem},
        computed: {
            unitName: function() {
                return this.unit.name;
            }
        }
    }
</script>

<style scoped>

</style>