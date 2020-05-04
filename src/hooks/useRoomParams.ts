import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { RoomContext } from 'contexts/rooms';
import { Room } from 'utils';

export default function useRoomParams(): Room | undefined {
	const { rooms, getRoom } = useContext(RoomContext);
	const { slug } = useParams();

	return getRoom(slug as string, rooms);
}
