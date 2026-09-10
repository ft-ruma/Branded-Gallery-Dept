<!--app/components/home/Hero.vue-->
<script setup lang="ts">
interface Props {
  products: FeedProduct[];
  loading?: boolean;
}

const props = defineProps<Props>();

const localePath = useLocalePath();
const { name } = useAppConfig().site;

const tiles = computed(() => Array.from({ length: 3 }, (_, i) => props.products[i] ?? null));
</script>

<template>
  <section class="px-3 pt-3 lg:px-5 lg:pt-5">
    <div class="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-alizarin-crimson-50 via-white to-neutral-100 dark:from-alizarin-crimson-950/50 dark:via-neutral-950 dark:to-black">
      <div aria-hidden="true" class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-alizarin-crimson-200/60 blur-3xl dark:bg-alizarin-crimson-800/20"></div>
      <div aria-hidden="true" class="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-white/70 blur-3xl dark:bg-white/5"></div>

      <div class="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full bg-black/5 py-1.5 pl-1.5 pr-4 text-xs font-bold uppercase tracking-wider dark:bg-white/10">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-alizarin-crimson-700 text-white">
              <UIcon name="i-iconamoon-trend-up-fill" size="14" />
            </span>
            {{ $t('home.hero.badge') }}
          </div>

          <h1 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
            {{ $t('home.hero.title') }}
          </h1>

          <p class="mt-5 max-w-xl font-medium text-secondary-text dark:text-secondary-text-d lg:text-lg">
            {{ $t('home.hero.description', { site: name }) }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink
              :to="localePath('/products')"
              class="flex h-12 items-center gap-2 rounded-full bg-black px-6 font-semibold text-white transition hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-black hover:dark:bg-neutral-200">
              <UIcon name="i-iconamoon-shopping-bag-fill" size="20" />
              {{ $t('home.hero.primary_cta') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/categories')"
              class="flex h-12 items-center gap-2 rounded-full bg-black/5 px-6 font-semibold transition hover:bg-black/10 active:scale-95 dark:bg-white/15 hover:dark:bg-white/20">
              <UIcon name="i-iconamoon-category-fill" size="20" />
              {{ $t('home.hero.secondary_cta') }}
            </NuxtLink>
          </div>

          <p class="mt-7 text-xs font-semibold uppercase tracking-wider text-secondary-text dark:text-secondary-text-d">
            {{ $t('home.hero.note') }}
          </p>
        </div>

        <div class="grid grid-cols-2 items-start gap-3 lg:gap-4">
          <HomeHeroTile :product="tiles[0]" :loading="loading" class="aspect-[3/4]" />
          <div class="grid gap-3 lg:mt-12 lg:gap-4">
            <HomeHeroTile :product="tiles[1]" :loading="loading" class="aspect-[4/3]" />
            <HomeHeroTile :product="tiles[2]" :loading="loading" class="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
