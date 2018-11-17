<template>
    <div>
        <table class="table table-bordered table-sm">
            <thead>
            <tr>
                <th>M</th>
                <th>WS</th>
                <th>BS</th>
                <th>S</th>
                <th>T</th>
                <th>W</th>
                <th>A</th>
                <th>Ld</th>
                <th>S</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{unit.move}}</td>
                <td>{{unit.weaponSkill}}</td>
                <td>{{unit.ballisticSkill}}</td>
                <td>{{unit.strength}}</td>
                <td>{{unit.toughness}}</td>
                <td>{{unit.wounds}}</td>
                <td>{{unit.attacks}}</td>
                <td>{{unit.leadership}}</td>
                <td>{{unit.save}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "RosterUnitStats",
        props: ['unit']
    }
</script>

<style scoped>

</style>