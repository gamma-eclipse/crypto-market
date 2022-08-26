import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { productViewsMock } from 'shared/mocks/productsViews';
import { ProductView } from 'shared/types';

export const fetchProducts = createEvent();
export const fetchProductsFx = createEffect<void, ProductView[]>();

fetchProductsFx.use(async () => {
  const data = await mockFetch<ProductView[]>(productViewsMock, 800);
  return data;
});

export const $catalogProducts = createStore<ProductView[] | null>(null);
const $isFetched = createStore(false);
export const $isLoading = createStore(false);

$catalogProducts.on(fetchProductsFx.doneData, (_, payload) => payload);
$isFetched.on(fetchProductsFx.doneData, () => true);
$isLoading.on(fetchProducts, () => true);
$isLoading.on(fetchProductsFx.done, () => false);

sample({
  clock: fetchProducts,
  filter: fetchProductsFx.pending.map((is) => !is),
  target: fetchProductsFx,
});
