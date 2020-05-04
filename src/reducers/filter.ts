import { set } from 'lodash/fp';
import { ON_FORM_INPUT_CHANGE } from 'constants/actionsTypes';

export type FilterArg = {
	type: string;
	capacity: number;
	price: number;
	minPrice: number;
	maxPrice: number;
	minSize: number;
	maxSize: number;
	breakfast: boolean;
	pets: boolean;
};

export type FilterState = FilterArg;

export const initialState: FilterState = {
	type: 'all',
	capacity: 1,
	price: 1000,
	minPrice: 0,
	maxPrice: 1000,
	minSize: 0,
	maxSize: 5000,
	breakfast: false,
	pets: false,
};

type Action = {
	type: ON_FORM_INPUT_CHANGE;
	payload: { name: string; value: string | boolean };
};

export function reducer(state: FilterState, action: Action) {
	switch (action.type) {
		case ON_FORM_INPUT_CHANGE: {
			const { name, value } = action.payload;

			switch (name) {
				case 'type': {
					return set('type', value, state);
				}
				case 'capacity': {
					return set('capacity', parseInt(value as string), state);
				}
				case 'price': {
					return set('price', parseInt(value as string), state);
				}
				case 'maxSize': {
					return set('maxSize', parseInt(value as string), state);
				}
				case 'minSize': {
					return set('minSize', parseInt(value as string), state);
				}
				case 'pets': {
					return set('pets', value, state);
				}
				case 'breakfast': {
					return set('breakfast', value, state);
				}
				default:
					break;
			}

			break;
		}

		default:
			break;
	}

	return state;
}
