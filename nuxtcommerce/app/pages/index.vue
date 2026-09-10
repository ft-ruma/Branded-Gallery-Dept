<!--app/pages/index.vue-->
<script setup>
definePageMeta({
  middleware: [
    to => {
      // Browsing and search moved to /products, so keep older shared links working.
      if (!['q', 'category', 'orderby', 'fieldby'].some(param => to.query[param])) return;
      const prefix = to.path.replace(/\/$/, '');
      return navigateTo({ path: `${prefix}/products`, query: to.query }, { replace: true });
    },
  ],
});

const { name, description } = useAppConfig().site;
const url = useRequestURL();
const localePath = useLocalePath();
const canonical = url.origin + url.pathname;

const { products: newArrivals, isLoading: newArrivalsLoading } = useProductFeed('new-arrivals', { field: 'DATE', order: 'DESC' }, 12);
const { products: valuePicks, isLoading: valuePicksLoading } = useProductFeed('value-picks', { field: 'PRICE', order: 'ASC' }, 12);
const { categories, isLoading: categoriesLoading } = useCategoryFeed(8);

useSeoMeta({
  ogTitle: name,
  description,
  ogDescription: description,
  ogUrl: canonical,
  canonical,
  keywords: `${name}, ecommerce, online store, new arrivals`,
  twitterTitle: name,
  twitterDescription: description,
  ogImage: 'https://commerce.nuxt.dev/social-card.jpg',
  twitterImage: 'https://commerce.nuxt.dev/social-card.jpg',
});

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  description,
  url: url.origin,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${url.origin}/products?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(websiteSchema) }],
});
</script>

<template>
  <div class="mx-auto max-w-screen-2xl">
    <HomeHero :products="newArrivals" :loading="newArrivalsLoading" />

    <div class="grid gap-12 py-12 lg:gap-16 lg:py-16">
      <HomeCategoryGrid :categories="categories" :loading="categoriesLoading" :skeleton-count="8" />

      <HomeProductRail
        :title="$t('home.new_arrivals.title')"
        :subtitle="$t('home.new_arrivals.subtitle')"
        :to="localePath('/products')"
        :link-label="$t('home.new_arrivals.link')"
        :products="newArrivals"
        :loading="newArrivalsLoading" />

      <HomePromo />

      <HomeProductRail
        :title="$t('home.value_picks.title')"
        :subtitle="$t('home.value_picks.subtitle')"
        :to="localePath('/products?fieldby=PRICE&orderby=ASC')"
        :link-label="$t('home.value_picks.link')"
        :products="valuePicks"
        :loading="valuePicksLoading" />

      <HomeValueProps />

      <HomeCtaBand />
    </div>
  </div>
</template>
