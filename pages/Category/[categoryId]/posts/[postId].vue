<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">這是 category/[categoryId]/posts/[postId] 的頁面</h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Post Id: <span class="text-5xl font-semibold text-blue-600">{{ categoryId }}</span>
      </p>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Comment Id:
        <span class="text-5xl font-semibold text-purple-400">{{ postId }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { categoryId, postId } = route.params;
</script>
