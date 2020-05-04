import React, { createContext, ReactNode, useReducer, useEffect } from 'react';
import { initialState, State, reducer } from 'reducers/rooms';
import { FETCH_ROOMS_SUCCESS } from 'constants/actionsTypes';
import { fetchResources, Room } from 'utils';

const RoomContext = createContext<State>(initialState);
const RoomConsumer = RoomContext.Consumer;

interface RoomProviderProps {
	children?: ReactNode;
}

const resource = fetchResources();

const RoomProvider = ({ children }: RoomProviderProps) => {
	const rooms: Room[] = resource.rooms.read();
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		dispatch({ type: FETCH_ROOMS_SUCCESS, payload: rooms });
	}, [rooms]);

	return (
		<RoomContext.Provider value={{ ...state, dispatch }}>
			{children}
		</RoomContext.Provider>
	);
};

export { RoomProvider, RoomContext, RoomConsumer };
