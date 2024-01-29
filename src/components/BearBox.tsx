import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useBearStore } from '../stores/bearStore';
import { useFoodStore } from '../stores/foodStore';

export const BearBox = () => {
	// const bears = useBearStore(state => state.bears)
	// const increasePopulation = useBearStore(state => state.increasePopulation);
	// const removeAllBears = useBearStore(state => state.removeAllBears)
	const { bears, increasePopulation, removeAllBears, reset } = useBearStore();
	// const fish = useFoodStore((state) => state.fish);

	const [bgColor, setBgColor] = useState<'lightgreen' | 'lightpink'>(
		'lightpink'
	);

	// N.B: subscribe permet de regarder l'avant et l'arrier d'un state

	useEffect(() => {
	// 	const unsub = useFoodStore.subscribe((state, prevState) => {
	// 		if (prevState.fish <= 5 && state.fish > 5) {
	// 			setBgColor('lightgreen');
	// 		} else if (prevState.fish > 5 && state.fish <= 5) {
	// 			setBgColor('lightpink');
	// 		}
	// 	});

	const unsub = useFoodStore.subscribe(
		(state) => state.fish,
		(fish, prevFish) => {
			if (prevFish <= 5 && fish > 5) {
				setBgColor('lightgreen');
			} else if (prevFish > 5 && fish <= 5) {
				setBgColor('lightpink');
			}
		},{
			equalityFn:shallow,
			fireImmediately:false
		}
	);


		return unsub;
	}, []);


	return (
		<div className="box" style={{ backgroundColor: bgColor }}>
			<h1>Bear Box</h1>
			<p>bears: {bears}</p>
			<p>{Math.random()}</p>
			<div>
				<button onClick={increasePopulation}>add bear</button>{' '}
				<button onClick={removeAllBears}>remove all bear</button>
				<button onClick={reset}>Clear storage</button>
			</div>
		</div>
	);
};
