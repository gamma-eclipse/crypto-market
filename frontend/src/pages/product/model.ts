import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { productMock } from 'shared/mocks/productMock';
import { IProduct } from 'shared/types';

export const fetchProduct = createEvent<string>();
const fetchProductFx = createEffect<string, IProduct>();

export const $product = createStore<IProduct | null>(null);

sample({
  clock: fetchProduct,
  filter: fetchProductFx.pending.map((is) => !is),
  target: fetchProductFx,
});

fetchProductFx.use(async () => {
  const data = await mockFetch(productMock, 1000);
  return data;
});

$product.on(fetchProductFx.doneData, (_, payload) => payload);
