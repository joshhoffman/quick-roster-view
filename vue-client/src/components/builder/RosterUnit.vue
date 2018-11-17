<template>
    <div>
        <span class="unitName">{{unitName}}</span>
        <ul>
            <li
                    v-for="weapon in unit.assignedWeapons">
                {{weapon.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "RosterUnit",
        props: ['unit'],
        computed: {
            unitName: function() {
                return this.unit.name;
            }
        }
    }
</script>

<style scoped>
    .unitName {
        font-weight: bold;
    }
</style>