const isDisplayable = (product: FeedProduct) =>
  Boolean(product?.sku && product?.slug && product.image?.sourceUrl && product.galleryImages?.nodes?.length && product.allPaStyle?.nodes?.length);

export const useProductFeed = (key: string, query: ProductFeedQuery = {}, limit = 12) => {
  const { data, status } = useAsyncData(
    `product-feed-${key}`,
    () => $fetch<ProductsFeedResponse>('/api/products', { query }).catch(() => null),
    // The storefront is prerendered without a store connection, so the feed is
    // resolved on the client and a failing store degrades to an empty section.
    { server: false, default: () => null }
  );

  const products = computed(() => (data.value?.products?.nodes ?? []).filter(isDisplayable).slice(0, limit));
  const isLoading = computed(() => status.value === 'idle' || status.value === 'pending');
  const isEmpty = computed(() => !isLoading.value && !products.value.length);

  return { products, isLoading, isEmpty };
};
