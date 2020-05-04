import { useContext, useEffect, useState } from 'react';
import { uniqBy, pluck } from 'lodash/fp';

import { Room } from 'utils/data';
import { RoomContext } from 'contexts/rooms';

function getUniqTypes(rooms: Room[]): string[] {
	return [
		'all',
		...pluck(
			'type',
			uniqBy((r: Room) => r.type, rooms)
		),
	];
}
function getUniqCapacity(rooms: Room[]): string[] {
	return pluck(
		(r: Room) => r.capacity.toString(),
		uniqBy((r: Room) => r.capacity, rooms)
	);
}

export default function useRoomTypes() {
	const { rooms } = useContext(RoomContext);
	const [uniq, setUniq] = useState<{
		roomTypes: string[];
		guessTypes: string[];
	}>({
		roomTypes: [],
		guessTypes: [],
	});

	useEffect(() => {
		const uniq = {
			roomTypes: getUniqTypes(rooms),
			guessTypes: getUniqCapacity(rooms),
		};

		setUniq(uniq);
	}, [rooms]);

	return uniq;
}
