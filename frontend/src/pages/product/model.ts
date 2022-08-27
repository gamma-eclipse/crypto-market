import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { productMock } from 'shared/mocks/product';
import { Product } from 'shared/types';

export const fetchProduct = createEvent<string>();
const fetchProductFx = createEffect<string, Product>();

const $product = createStore<Product | null>(null);

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
