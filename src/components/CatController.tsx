import { shallow } from 'zustand/shallow';
import { useCatStore } from '../stores/catStore';

const CatController = () => {
	// const increaseBigCats = useCatStore.use.increaseBigCats();
	// const increaseSmallCats = useCatStore.use.increaseSmallCats();

	/*
	const { increaseBigCats, increaseSmallCats } = useCatStore(
		(state) => ({
			increaseBigCats: state.increaseBigCats,
			increaseSmallCats: state.increaseSmallCats,
		}),
		shallow	//	il permet de ne pas reloader le composant si le composant n'utilise pas le state
	);
*/

	const [increaseBigCats, increaseSmallCats] = useCatStore(
		(state) => [state.increaseBigCats, state.increaseSmallCats],
		shallow
	);

	return (
		<div className="box">
			<h1>Cat Controller</h1>
			<p>{Math.random()}</p>
			<div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
				<button onClick={increaseBigCats}>add big cats</button>
				<button onClick={increaseSmallCats}>add small cats</button>
			</div>
		</div>
	);
};

export default CatController;
