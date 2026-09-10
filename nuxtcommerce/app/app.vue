<!--app/app.vue-->
<script setup lang="ts">
const { site } = useAppConfig();
const { name, description } = site;

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: (chunk?: string) => (chunk ? `${chunk} - ${name}` : name),
});

useSeoMeta({
  description,
  ogType: 'website',
  ogSiteName: name,
  ogLocale: 'en_US',
  ogImage: 'https://commerce.nuxt.dev/social-card.jpg',
  twitterCard: 'summary_large_image',
  twitterSite: '@zhatlen',
  twitterCreator: '@zhatlen',
  twitterImage: 'https://commerce.nuxt.dev/social-card.jpg',
  keywords: `${name}, ecommerce, nuxt, woocommerce`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover',
});
</script>

<template>
  <AppHeader />
  <main class="pt-[72px] lg:pt-20 min-h-[calc(100vh-72px)]">
    <NuxtPage />
  </main>
  <AppFooter />
  <Notivue v-slot="item">
    <Notification :item="item" :theme="materialTheme" />
  </Notivue>
</template>

<style lang="postcss">
.dark {
  @apply bg-black text-neutral-100;
  color-scheme: dark;
}
.dropdown-enter-active {
  @apply transition duration-200 ease-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  @apply translate-y-5 opacity-0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  @apply transform opacity-100;
}
.dropdown-leave-active {
  @apply transition duration-150 ease-in;
}
.dark .skeleton {
  --skeleton-bg: #141414;
}
.skeleton {
  --skeleton-bg: #f5f5f5;
}
.skeleton {
  @apply relative overflow-hidden;
  &:before {
    @apply absolute w-full h-full;
    content: '';
    background: linear-gradient(110deg, rgba(0, 0, 0, 0) 25%, var(--skeleton-bg) 50%, rgba(0, 0, 0, 0) 75%);
    background-size: 400% 100%;
    animation: shimmer 4s infinite linear;
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
