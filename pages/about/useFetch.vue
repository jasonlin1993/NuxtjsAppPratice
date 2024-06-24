<template>
  <div class="my-24 flex flex-col items-center">
    <span class="text-xl text-gray-400"> [useFetch] </span>
    <span class="my-2 text-2xl text-sky-600">請求狀態:{{ status }}</span>
    <span v-if="error" class="my-2 text-xl text-rose-600">發生錯誤:{{ error }}</span>
    <span class="my-2 text-2xl text-gray-600">回傳資料:</span>
    <p v-if="pending" class="my-4 text-xl font-semibold text-blue-500">請求處理中...</p>
    <p v-else class="my-4 text-xl font-semibold text-blue-500">{{ data }}</p>

    <button
      class="focus: mt-6 rounded-md bg-blue-500 px-6 py-3 text-white outline-none hover:bg-blue-600"
      @click="refresh"
    >
      重新獲取資料
    </button>
  </div>
</template>

<script setup>
const { data, pending, refresh, error, status } = await useFetch('/api/about');
</script>
