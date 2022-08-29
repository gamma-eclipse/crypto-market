import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { productViewsMock } from 'shared/mocks/productsViewsMock';
import { IProductView } from 'shared/types';

// fetch by user id
export const fetchProducts = createEvent<string>();
export const fetchProductsFx = createEffect<string, IProductView[]>();

export const $products = createStore<IProductView[]>([]);

fetchProductsFx.use(async (userId) => {
  const data = await mockFetch(productViewsMock, 800);
  return data;
});

sample({
  clock: fetchProducts,
  filter: fetchProductsFx.pending.map((is) => !is),
  target: fetchProductsFx,
});

$products.on(fetchProductsFx.doneData, (_, payload) => payload);

fetchProductsFx.doneData.watch(console.log);
