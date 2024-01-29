import { useFoodStore } from '../stores/foodStore';
import { addOneFish, removeOneFish, removeAllFish } from '../stores/foodStore';

const FoodBox = () => {
	const { fish } = useFoodStore();

	const add5Fish = () => {
		useFoodStore.setState((state) => ({
			fish: state.fish + 5,
		}));
	};

	return (
		<div className="box">
			<h1>Food Box</h1>
			<p>fish:{fish}</p>
			<div>
				<button onClick={addOneFish}>add one fish</button>
				<button onClick={removeOneFish}>remove one fish</button>
				<button onClick={removeAllFish}>remove all fish</button>
				<button onClick={add5Fish}>add 5 fish</button>
			</div>
		</div>
	);
};

export default FoodBox;
