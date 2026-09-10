<!--app/components/home/HeroTile.vue-->
<script setup lang="ts">
interface Props {
  product?: FeedProduct | null;
  loading?: boolean;
}

const props = defineProps<Props>();

const localePath = useLocalePath();

const to = computed(() => (props.product ? localePath(`/product/${props.product.slug}-${props.product.sku.split('-')[0]}`) : ''));
</script>

<template>
  <div v-if="loading" class="skeleton overflow-hidden rounded-3xl bg-neutral-200 dark:bg-neutral-800"></div>
  <NuxtLink v-else-if="product" :to="to" class="group relative block overflow-hidden rounded-3xl shadow-lg shadow-black/10 dark:shadow-black/50">
    <NuxtImg
      :src="product.image?.sourceUrl"
      :alt="product.name"
      :title="product.name"
      class="h-full w-full bg-neutral-200 object-cover transition duration-500 group-hover:scale-[1.04] dark:bg-neutral-800" />
    <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 p-4">
      <div class="min-w-0 text-white">
        <div class="truncate text-sm font-bold">{{ product.name }}</div>
        <div class="truncate text-xs font-medium text-white/75">{{ product.allPaStyle?.nodes[0]?.name }}</div>
      </div>
    </div>
  </NuxtLink>
  <div v-else class="rounded-3xl bg-gradient-to-br from-black/[0.07] to-black/[0.02] dark:from-white/10 dark:to-white/[0.02]"></div>
</template>
