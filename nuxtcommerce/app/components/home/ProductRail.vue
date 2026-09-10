<!--app/components/home/ProductRail.vue-->
<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  to?: string;
  linkLabel?: string;
  products: FeedProduct[];
  loading?: boolean;
  skeletonCount?: number;
}

const props = withDefaults(defineProps<Props>(), { skeletonCount: 6 });

const rail = ref<HTMLElement | null>(null);
const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const updateScrollState = () => {
  const el = rail.value;
  if (!el) return;
  canScrollPrev.value = el.scrollLeft > 8;
  canScrollNext.value = Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth - 8;
};

const scrollPage = (direction: number) => {
  const el = rail.value;
  if (!el) return;
  el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' });
};

useResizeObserver(rail, updateScrollState);

watch(
  () => props.products,
  () => nextTick(updateScrollState)
);

onMounted(updateScrollState);
</script>

<template>
  <section v-if="loading || products.length">
    <HomeSectionHeader :title="title" :subtitle="subtitle" :to="to" :link-label="linkLabel" />

    <div class="relative mt-4 lg:mt-5">
      <div
        ref="rail"
        @scroll.passive="updateScrollState"
        class="grid snap-x auto-cols-[76%] grid-flow-col gap-3 overflow-x-auto scroll-p-3 px-3 pb-1 xs:auto-cols-[58%] sm:auto-cols-[42%] md:auto-cols-[32%] lg:auto-cols-[25%] lg:gap-5 lg:scroll-p-5 lg:px-5 xl:auto-cols-[20%] 2xl:auto-cols-[16%] [&>*]:snap-start">
        <template v-if="loading">
          <div v-for="i in skeletonCount" :key="i">
            <div class="skeleton w-full overflow-hidden rounded-2xl bg-neutral-200 pb-[133%] dark:bg-neutral-800"></div>
            <div class="grid gap-1.5 px-1.5 pb-4 pt-3">
              <div class="skeleton h-4 w-20 rounded bg-neutral-200/80 dark:bg-neutral-800/80"></div>
              <div class="skeleton h-4 w-44 rounded bg-neutral-200/60 dark:bg-neutral-800/60"></div>
              <div class="skeleton h-4 w-28 rounded bg-neutral-200/40 dark:bg-neutral-800/40"></div>
            </div>
          </div>
        </template>
        <ProductCard v-else :products="products" />
      </div>

      <button
        v-show="canScrollPrev"
        type="button"
        :aria-label="$t('home.rail.previous')"
        @click="scrollPage(-1)"
        class="absolute left-7 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-white active:scale-95 lg:flex dark:bg-black/70 hover:dark:bg-black">
        <UIcon name="i-iconamoon-arrow-left-2" size="24" />
      </button>
      <button
        v-show="canScrollNext"
        type="button"
        :aria-label="$t('home.rail.next')"
        @click="scrollPage(1)"
        class="absolute right-7 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-white active:scale-95 lg:flex dark:bg-black/70 hover:dark:bg-black">
        <UIcon name="i-iconamoon-arrow-right-2" size="24" />
      </button>
    </div>
  </section>
</template>
