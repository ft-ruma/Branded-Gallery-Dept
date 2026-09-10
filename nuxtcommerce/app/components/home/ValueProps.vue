<!--app/components/home/ValueProps.vue-->
<script setup lang="ts">
const items = [
  { key: 'shipping', icon: 'i-iconamoon-delivery-free-fill' },
  { key: 'returns', icon: 'i-iconamoon-box-fill' },
  { key: 'secure', icon: 'i-iconamoon-shield-fill' },
  { key: 'support', icon: 'i-iconamoon-headphone-fill' },
];
</script>

<template>
  <section class="grid gap-3 px-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:px-5">
    <div v-for="item in items" :key="item.key" class="rounded-3xl border border-black/5 p-6 transition hover:border-black/10 dark:border-white/10 hover:dark:border-white/20">
      <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10">
        <UIcon :name="item.icon" size="24" />
      </span>
      <h3 class="mt-5 font-bold">{{ $t(`home.value_props.${item.key}.title`) }}</h3>
      <p class="mt-1.5 text-sm font-medium text-secondary-text dark:text-secondary-text-d">{{ $t(`home.value_props.${item.key}.description`) }}</p>
    </div>
  </section>
</template>
