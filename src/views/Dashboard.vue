<template>
    <div class="grid grid-cols-4 gap-4 p-4">
        <div
        v-for="stat in stats"
        :key="stat.label"
        :class="[stat.color, 'p-6 rounded-lg text-white shadow-md']"
        >
        <p class="text-lg font-bold">{{ stat.label }}</p>
        <p class="text-3xl font-bold">{{ stat.value }}</p>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const stats = ref([
    {
        label:'Total Transactions', value:200, color: 'bg-blue-400'
    },
    {
        label:'Flagged Transactions', value:300, color:'bg-yellow-400'
    },
    {
        label:'Blocked Transactions', value:150, color:'bg-red-400'
    },
    {
        label:'Recovered Transactions', value:980, color:'bg-green-400'
    }
])
</script>

<style>

</style>