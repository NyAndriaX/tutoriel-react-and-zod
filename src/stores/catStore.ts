import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from '../utils/createSelectors';

type TCatStoreState = {
	cats: {
		bigCats: number;
		smallCats: number;
	};
	increaseBigCats: () => void;
	increaseSmallCats: () => void;
	summary: () => void;
};

export const useCatStore = createSelectors(
	create<TCatStoreState>()(
		immer(
			devtools(
				subscribeWithSelector(
					persist(
						(set, get) => ({
							cats: {
								bigCats: 0,
								smallCats: 0,
							},
							increaseBigCats: () =>
								set((state) => {
									state.cats.bigCats++;
								}),
							increaseSmallCats: () =>
								set((state) => {
									state.cats.smallCats++;
								}),
							summary: () => {
								const total = get().cats.bigCats + get().cats.smallCats;
								return `There are ${total} cats in total. `;
							},
						}),
						{
							name: 'cat store',
						}
					)
				),
				{
					enabled: true,
				}
			)
		)
	)
);

// N.B: Immer middleware call function

//N.B : Immer middleware simplifies state accessibility
