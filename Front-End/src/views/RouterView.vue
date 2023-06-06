<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
      <template #fallback
        ><div class="flex col align-center">
          <h1>Loading...</h1>
        </div></template
      >
    </Suspense>
  </RouterView>
</template>
