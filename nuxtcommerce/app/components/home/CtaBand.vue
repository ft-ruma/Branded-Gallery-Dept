<!--app/components/home/CtaBand.vue-->
<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <section class="px-3 lg:px-5">
    <div class="rounded-[32px] bg-neutral-950 px-8 py-12 text-center dark:bg-white/5 lg:py-16">
      <h2 class="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white lg:text-4xl">{{ $t('home.cta.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl font-medium text-white/70">{{ $t('home.cta.description') }}</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <NuxtLink
          :to="localePath('/products')"
          class="flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-black transition hover:bg-white/90 active:scale-95">
          <UIcon name="i-iconamoon-shopping-bag-fill" size="20" />
          {{ $t('home.cta.primary') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/categories')" class="flex h-12 items-center gap-2 rounded-full bg-white/10 px-6 font-semibold text-white transition hover:bg-white/20 active:scale-95">
          <UIcon name="i-iconamoon-category-fill" size="20" />
          {{ $t('home.cta.secondary') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
