<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <nav class="flex items-center bg-blue-500 text-white p-4">
      <h2 class="text-3xl font-bold">FraudGuard</h2>
      <img src="/images/shield.png" alt="shield" class="w-10 h-10 mt-2" />
      <div class="flex items-center ml-auto">
        <label class="text-white p-4">Search</label>
        <input type="text" placeholder="search transaction"
          class="border-none rounded-lg p-2 text-black" />
      </div>
    </nav>

    <div class="flex flex-1">

      <aside class="w-60 bg-white shadow-lg p-5">
        <ul class="space-y-2">
          <li class="font-bold p-3 rounded-lg hover:bg-blue-400 bg-blue-300">Dashboard</li>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-400 bg-blue-300">Transactions</li>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-400 bg-blue-300">Notifications</li>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-400 bg-blue-300">Admin Logs</li>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-400 bg-blue-300">Settings</li>
          <br>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-300 bg-red-400">Profile</li>
          <li class="font-bold p-3 rounded-lg hover:bg-blue-300 bg-red-300">Logout</li>
        </ul>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="flex-1 p-4">
        <RouterView />
      </main>

    </div>

    <!-- FOOTER -->
    <footer class="bg-gray-300 border-t">
      <div class="flex justify-between items-center p-4">
        <p class="font-bold text-lg">FraudGuard v1.0</p>
        <p class="font-bold text-lg">© 2026 Millen Tech Solutions</p>
        <p class="font-bold text-lg">All rights reserved</p>
      </div>
    </footer>

  </div>
</template>

<style scoped></style>