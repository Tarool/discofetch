<script setup lang="ts">
const { data } = await dfetch.GET('/posts/{id}', {
  params: {
    path: {
      id: 1,
    },
  },
})
</script>

<template>
  <div>
    <h1>{{ data?.title }}</h1>

    <p>{{ data?.body }}</p>
  </div>
</template>
