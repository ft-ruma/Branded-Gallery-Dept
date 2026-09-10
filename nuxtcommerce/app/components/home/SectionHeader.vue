<!--app/components/home/SectionHeader.vue-->
<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  to?: string;
  linkLabel?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-end justify-between gap-4 px-3 lg:px-5">
    <div class="min-w-0">
      <h2 class="truncate text-2xl font-extrabold tracking-tight lg:text-3xl">{{ title }}</h2>
      <p v-if="subtitle" class="mt-1 text-sm font-medium text-secondary-text dark:text-secondary-text-d">{{ subtitle }}</p>
    </div>
    <NuxtLink
      v-if="to"
      :to="to"
      class="flex flex-none items-center gap-1 rounded-full bg-black/5 px-4 py-2 text-sm font-semibold transition hover:bg-black/10 active:scale-95 dark:bg-white/15 hover:dark:bg-white/20">
      <span class="max-xs:hidden">{{ linkLabel }}</span>
      <UIcon name="i-iconamoon-arrow-right-2" size="18" />
    </NuxtLink>
  </div>
</template>
