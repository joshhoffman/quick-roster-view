<template>
    <div>
        <select
                v-model="selectedOption">
            <option value="-1"></option>
            <option
                    v-for="weapon in weapons"
                    :value="weapon.id">
                {{weapon.name}}
            </option>
        </select> &nbsp;
        <button @click="onAdd">Add</button>
    </div>
</template>

<script>
    export default {
        name: "WeaponSelect",
        props: ['unit'],
        data: function() {
            return {
                selectedOption: null
            }
        },
        computed: {
            weapons: function() {
                return this.$store.state.weapons;
            }
        },
        methods: {
            onAdd: function() {
                if (this.selectedOption === -1 || !this.selectedOption) {
                    return;
                }
                const weapon = this._.find(this.$store.state.weapons, {id: this.selectedOption});
                this.unit.assignedWeapons.push(this._.merge({}, weapon, {key: this.unit.assignedWeapons.length}));
            }
        }
    }
</script>

<style scoped>

</style>