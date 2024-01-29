import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

const initialValue = {
	fish: 0,
	mouse: 0,
};
export const useFoodStore = create<typeof initialValue>()(
	devtools(
		subscribeWithSelector(
			persist(() => initialValue, {
				name: 'food store',
			})
		)
	)
);

export const addOneFish = () =>
	useFoodStore.setState((state) => ({ fish: state.fish + 1 }));
export const removeOneFish = () =>
	useFoodStore.setState((state) => ({ fish: state.fish - 1 }));
export const removeAllFish = () => useFoodStore.setState({ fish: 0 });
