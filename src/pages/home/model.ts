import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { productViewsMock } from 'shared/mocks/productsViewsMock';
import { IProductView } from 'shared/types';

export const fetchProducts = createEvent();
export const fetchProductsFx = createEffect<void, IProductView[]>();

fetchProductsFx.use(async () => {
  const data = await mockFetch(productViewsMock, 800);
  return data;
});

export const $catalogProducts = createStore<IProductView[]>([]);

$catalogProducts.on(fetchProductsFx.doneData, (_, payload) => payload);

sample({
  clock: fetchProducts,
  filter: fetchProductsFx.pending.map((is) => !is),
  target: fetchProductsFx,
});
