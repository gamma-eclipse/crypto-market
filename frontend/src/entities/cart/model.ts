import { createEffect, createEvent, sample } from 'effector';
import { mockFetch } from 'shared/helpers';

export const addToCart = createEvent<string>();
const addToCartFx = createEffect<string, void>();

addToCartFx.use(async (productId) => {
  await mockFetch(productId, 500);
});

sample({
  clock: addToCart,
  target: addToCartFx,
});
