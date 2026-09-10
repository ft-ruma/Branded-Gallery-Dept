<!--app/components/home/Promo.vue-->
<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <section class="grid gap-3 px-3 lg:grid-cols-3 lg:gap-5 lg:px-5">
    <div class="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-alizarin-crimson-700 to-alizarin-crimson-900 p-8 text-white lg:col-span-2 lg:p-12">
      <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"></div>
      <div class="relative max-w-lg">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/15 py-1.5 pl-3 pr-4 text-xs font-bold uppercase tracking-wider">
          <UIcon name="i-iconamoon-discount-fill" size="16" />
          {{ $t('home.promo.deals.badge') }}
        </div>
        <h2 class="mt-5 text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">{{ $t('home.promo.deals.title') }}</h2>
        <p class="mt-4 font-medium text-white/80">{{ $t('home.promo.deals.description') }}</p>
        <NuxtLink
          :to="localePath('/products?fieldby=PRICE&orderby=ASC')"
          class="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-black transition hover:bg-white/90 active:scale-95">
          {{ $t('home.promo.deals.cta') }}
          <UIcon name="i-iconamoon-arrow-right-2" size="20" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col justify-between rounded-[32px] bg-black/5 p-8 dark:bg-white/10 lg:p-10">
      <div>
        <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-alizarin-crimson-700 shadow-sm dark:bg-black">
          <UIcon name="i-iconamoon-heart-fill" size="26" />
        </span>
        <h2 class="mt-6 text-2xl font-extrabold tracking-tight">{{ $t('home.promo.wishlist.title') }}</h2>
        <p class="mt-3 text-sm font-medium text-secondary-text dark:text-secondary-text-d">{{ $t('home.promo.wishlist.description') }}</p>
      </div>
      <NuxtLink :to="localePath('/favorites')" class="mt-8 inline-flex items-center gap-1.5 font-semibold text-alizarin-crimson-700 transition hover:gap-3 dark:text-alizarin-crimson-400">
        {{ $t('home.promo.wishlist.cta') }}
        <UIcon name="i-iconamoon-arrow-right-2" size="20" />
      </NuxtLink>
    </div>
  </section>
</template>
