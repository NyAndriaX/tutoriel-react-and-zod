// import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import {
	// createJSONStorage,
	persist,
} from 'zustand/middleware';

type TBearStoreState = {
	bears: number;
	color: string;
	size: string;
	increasePopulation: () => void;
	removeAllBears: () => void;
	reset: () => void;
};

// il faudrait typer les donners dans le useBearStore pour le react typescript
export const useBearStore = create<TBearStoreState>()(
	persist(
		(set) => ({
			bears: 0,
			color: 'red',
			size: 'big',
			increasePopulation: () =>
				set((state) => ({
					bears: state.bears + 1,
				})),
			removeAllBears: () => set({ bears: 0 }),
			reset: () =>
				set((state) => ({
					bears: state.bears,
					color: 'red',
					size: 'big',
				})),
		}),
		{
			name: 'bear store',
			/*

				N.B : uniquements le bears state
				partialize: (state) => ({
					bears: state.bears,
				}),

			*/

			
				// N.B : Touts les donner sauf le size et color
				partialize: (state) => Object.fromEntries(
					Object.entries(state).filter(([key]) => !["size","color"].includes(key))
				)
  
		

			/*

				N.B: Toutes les state sont enregistrer
				storage: createJSONStorage(() => sessionStorage),

			*/
		}
	)
);
