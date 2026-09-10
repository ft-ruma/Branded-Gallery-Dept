export const useCategoryFeed = (limit = 8) => {
  const { data, status } = useAsyncData('category-feed', () => $fetch<CategoriesResponse>('/api/categories').catch(() => null), { server: false, default: () => null });

  const categories = computed(() =>
    (data.value?.productCategories?.nodes ?? []).filter(category => category.image?.sourceUrl && category.products?.nodes?.length).slice(0, limit)
  );
  const isLoading = computed(() => status.value === 'idle' || status.value === 'pending');
  const isEmpty = computed(() => !isLoading.value && !categories.value.length);

  return { categories, isLoading, isEmpty };
};
