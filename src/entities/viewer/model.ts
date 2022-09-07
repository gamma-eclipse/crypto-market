import { createEffect, createEvent, createStore, sample } from 'effector';
import { mockFetch } from 'shared/helpers';
import { viewerMock } from 'shared/mocks/viewerMock';
import { IViewer } from 'shared/types';

type ILoginData = {
  login: string;
  password: string;
};

export const login = createEvent<ILoginData>();
export const loginFx = createEffect<ILoginData, IViewer>();

loginFx.use(async () => {
  const data = await mockFetch(viewerMock, 1500);
  return data;
});

export const $viewer = createStore<IViewer | null>(null);

sample({
  clock: login,
  filter: loginFx.pending.map((is) => !is),
  target: loginFx,
});

$viewer.on(loginFx.doneData, (_, payload) => payload);
