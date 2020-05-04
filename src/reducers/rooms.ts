import { filter, find, flow, set } from 'lodash/fp';
import { Room } from 'utils';
import {
	FETCH_ROOMS,
	FETCH_ROOMS_SUCCESS,
	FETCH_ROOMS_FAIL,
	FILTER_ROOMS,
} from 'constants/actionsTypes';

import { FilterArg } from './filter';

export type State = {
	// Local state
	rooms: Array<Room>;
	sortedRooms: Array<Room>;
	featuredRooms: Array<Room>;

	// Helper logic functions
	getRoom: Function;
	dispatch?: Function;
};

function getRoom(slug: string, rooms: Array<Room>): Room | undefined {
	return find({ slug }, rooms);
}

export const initialState: State = {
	rooms: [],
	sortedRooms: [],
	featuredRooms: [],
	getRoom,
};

type Action =
	| { type: FETCH_ROOMS }
	| { type: FETCH_ROOMS_SUCCESS; payload: Room[] }
	| { type: FETCH_ROOMS_FAIL; payload: string }
	| { type: FILTER_ROOMS; payload: FilterArg };

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case FETCH_ROOMS_SUCCESS: {
			return flow([
				set('rooms', action.payload),
				set('sortedRooms', action.payload),
				set('featuredRooms', filter({ featured: true }, action.payload)),
			])(state);
		}

		case FILTER_ROOMS: {
			const args = action.payload;
			let update = state.rooms;

			// Filter type
			if (args.type !== 'all') {
				update = filter({ type: args.type }, update);
			}

			// Filter capacity
			if (args.capacity !== 1) {
				update = filter((room: Room) => room.capacity >= args.capacity, update);
			}

			// Filter price
			update = filter((room: Room) => room.price <= args.price, update);

			// Filter size
			update = filter((room: Room) => {
				return room.size >= args.minSize && room.size <= args.maxSize;
			}, update);

			// Filter breakfast
			if (args.breakfast) {
				update = filter({ breakfast: true }, update);
			}

			// Filter pets
			if (args.pets) {
				update = filter({ pets: true }, update);
			}

			return set('sortedRooms', update, state);
		}
		default: {
			break;
		}
	}

	return state;
}
