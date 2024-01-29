import { useCatStore } from '../stores/catStore';

const CatBox2 = () => {
	// const {
	// 	cats: { bigCats },        //its problem is that each time the store state changes,ven if the state its does not concern, it refreshes
	// } = useCatStore();

	const bigCats = useCatStore((state) => state.cats.bigCats);
	return (
		<div className="box">
			<h1>Partial States from catStore</h1>
			<p>big cats : {bigCats}</p>
			<p>{Math.random()}</p>
		</div>
	);
};

export default CatBox2;


// N.B :