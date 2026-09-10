<!--app/components/home/CategoryGrid.vue-->
<script setup lang="ts">
interface Props {
  categories: CategoryNode[];
  loading?: boolean;
  skeletonCount?: number;
}

withDefaults(defineProps<Props>(), { skeletonCount: 4 });

const localePath = useLocalePath();
</script>

<template>
  <section v-if="loading || categories.length">
    <HomeSectionHeader :title="$t('home.categories.title')" :subtitle="$t('home.categories.subtitle')" :to="localePath('/categories')" :link-label="$t('home.categories.link')" />

    <div class="mt-4 grid grid-cols-2 gap-3 px-3 md:grid-cols-3 lg:mt-5 lg:grid-cols-4 lg:gap-5 lg:px-5">
      <template v-if="loading">
        <div v-for="i in skeletonCount" :key="i" class="skeleton aspect-[4/5] rounded-3xl bg-neutral-200 dark:bg-neutral-800"></div>
      </template>
      <template v-else>
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="localePath(`/products?category=${encodeURIComponent(category.name)}`)"
          class="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
          <NuxtImg
            :src="category.image?.sourceUrl"
            :alt="category.name"
            :title="category.name"
            loading="lazy"
            class="h-full w-full bg-neutral-200 object-cover transition duration-500 group-hover:scale-[1.04] dark:bg-neutral-800" />
          <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 p-4 lg:p-5">
            <div class="flex w-full items-center justify-between gap-2 text-white">
              <span class="truncate text-lg font-bold lg:text-xl">{{ category.name }}</span>
              <span class="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:bg-white group-hover:text-black">
                <UIcon name="i-iconamoon-arrow-right-2" size="18" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>
