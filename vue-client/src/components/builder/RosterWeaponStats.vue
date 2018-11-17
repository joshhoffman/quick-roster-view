<template>
    <tr>
        <td>{{weapon.name}}</td>
        <td>{{weapon.range}}</td>
        <td>{{weapon.type}}</td>
        <td>{{weapon.strength}}</td>
        <td>{{weapon.ap}}</td>
        <td>{{weapon.damage}}</td>
    </tr>
</template>

<script>
    export default {
        name: "RosterWeaponStats",
        props: ['weapon']
    }
</script>

<style scoped>

</style>